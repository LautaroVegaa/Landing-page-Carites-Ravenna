// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
const Stripe = require("stripe");

dotenv.config();

const app = express();
app.use(cors());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://landing-page-carites-ravenna.vercel.app"
  ],
  methods: ["GET", "POST"]
}));
app.use(express.json());

// ======================
// Stripe
// ======================
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Crear sesión de pago
app.post("/create-stripe-session", async (req, res) => {
  try {
    const { items } = req.body;

    const lineItems = items.map(item => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.title,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://landing-page-carites-ravenna.vercel.app/thank-you.html?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://landing-page-carites-ravenna.vercel.app/index.html",
    });

    res.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error("Error creando sesión Stripe:", err);
    res.status(500).send("Error creando sesión Stripe");
  }
});

// Obtener detalles de la sesión (datos del cliente)
app.get("/stripe-session/:id", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id, {
      expand: ["customer", "payment_intent"],
    });

    res.json({
      orderId: session.id,
      status: session.payment_status,
      email: session.customer_details?.email,
      date: new Date(),
      total: session.amount_total / 100,
      paymentMethod: "Carta di Credito"
    });
  } catch (err) {
    console.error("Error recuperando sesión Stripe:", err);
    res.status(500).send("Error recuperando sesión Stripe");
  }
});


// ======================
// PayPal
// ======================
app.post("/create-paypal-order", async (req, res) => {
  try {
    const { items } = req.body;

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const accessToken = await generateAccessToken();
    const order = await createOrder(total, accessToken);

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating PayPal order");
  }
});

app.post("/capture-paypal-order/:orderID", async (req, res) => {
  try {
    const { orderID } = req.params;
    const accessToken = await generateAccessToken();

    const response = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    const capture = data?.purchase_units?.[0]?.payments?.captures?.[0];

    res.json({
      orderId: data.id,
      status: data.status,
      email: data.payer?.email_address,
      date: new Date(),
      total: capture?.amount?.value,
      paymentMethod: "PayPal"
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error capturing PayPal order");
  }
});

// ======================
// Helpers
// ======================
async function generateAccessToken() {
  const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString("base64");
  const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

async function createOrder(total, accessToken) {
  const response = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: total.toString(),
          },
        },
      ],
    }),
  });

  return response.json();
}

// ======================
// Start server
// ======================
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("✅ Backend Carites funcionando en Render 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
