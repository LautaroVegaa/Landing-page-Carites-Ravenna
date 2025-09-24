require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paypal = require("@paypal/paypal-server-sdk");

const app = express();
app.use(cors());
app.use(express.json());

// ==================
// Stripe Checkout
// ==================
app.post("/create-stripe-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items.map(item => ({
        price_data: {
          currency: "eur",
          product_data: { name: item.title },
          unit_amount: item.price * 100, // céntimos
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ error: "Stripe session error" });
  }
});

// ==================
// PayPal Checkout
// ==================

// Crear cliente PayPal
const paypalClient = new paypal.core.Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: process.env.PAYPAL_CLIENT_ID,
    oAuthClientSecret: process.env.PAYPAL_CLIENT_SECRET,
  },
  environment: "sandbox", // cambiar a "live" en producción
});

app.post("/create-paypal-order", async (req, res) => {
  const total = req.body.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  try {
    // Crear orden
    const orderRequest = new paypal.orders.OrdersCreateRequest();
    orderRequest.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: total.toString(),
          },
        },
      ],
    });

    // Ejecutar orden en PayPal
    const response = await paypalClient.execute(orderRequest);

    // Buscar link de aprobación
    const approveUrl = response.result.links.find(link => link.rel === "approve").href;
    res.json({ url: approveUrl });
  } catch (err) {
    console.error("PayPal error:", err);
    res.status(500).json({ error: "PayPal order error" });
  }
});

// ==================
// Start server
// ==================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
