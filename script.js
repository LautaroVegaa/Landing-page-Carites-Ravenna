// =====================
// Service data
// =====================
const services = [
    { id: 1,  title: "Massaggio Rilassante Corpo Intero", description: "Massaggio total body per ridurre stress e tensioni.", duration: "60 min", price: 25, isPromo: false, category: "massaggi",
        image: "img/massaggio-rilassante.png",
    details: [
    "Riduzione dello stress e dell'ansia - Il tocco lento e delicato stimola il sistema nervoso parasimpatico, favorendo calma mentale e rilascio di endorfine.",
    "Miglioramento della circolazione sanguigna - I movimenti fluidi aiutano a far fluire meglio il sangue, ossigenando i tessuti e nutrendo le cellule.",
    "Rilassamento muscolare profondo - Scioglie tensioni e rigidità accumulate, migliorando la mobilità e prevenendo dolori.",
    "Benefici per il sonno - Il corpo entra in uno stato di profondo rilassamento, facilitando un riposo più lungo e rigenerante.",
    "Aumento della consapevolezza corporea - Aiuta a riconnettersi con il proprio corpo, percependo meglio sensazioni e bisogni fisici."
    ]
    },
    { id: 2,  title: "Massaggio Decontratturante", description: "Trattamento mirato per sciogliere contratture muscolari.", duration: "45 min", price: 30, isPromo: false, category: "massaggi",
        image: "img/massaggio-descontractturante.png",
        details: [
    "Scioglimento delle contratture muscolari - Agisce in profondità sui punti tesi, liberando le fibre muscolari bloccate.",
    "Riduzione del dolore e delle infiammazioni - Migliora l'afflusso di sangue nella zona interessata, favorendo la guarigione.",
    "Miglioramento della mobilità articolare - Allenta tensioni che limitano i movimenti, restituendo elasticità e libertà.",
    "Prevenzione di nuove contratture - Riequilibra la postura e riduce il rischio di tensioni croniche dovute a stress o sforzi fisici.",
    "Aumento dell'energia e del benessere - Liberando i muscoli, il corpo spende meno energie per compensare il dolore e si sente più leggero e vitale."
    ]
    },
    { id: 3,  title: "Massaggio Linfodrenante", description: "Stimola il sistema linfatico e riduce gonfiori e ritenzione.", duration: "60 min", price: 30, isPromo: false, category: "massaggi",
        image: "img/massaggio-linfodrenante.png",
        details: [
    "Riduzione di gonfiori e ritenzione idrica - Favorisce il drenaggio dei liquidi in eccesso, specialmente in gambe, caviglie e addome.",
    "Stimolazione del sistema linfatico - Migliora la capacità dell'organismo di eliminare tossine e scorie metaboliche.",
    "Supporto al sistema immunitario - Un flusso linfatico più attivo rafforza le difese naturali del corpo.",
    "Miglioramento della circolazione e della pelle - La pelle appare più tonica, luminosa e compatta grazie all'aumento di ossigenazione.",
    "Effetto rilassante e rigenerante - I movimenti lenti e ritmati inducono calma profonda e benessere generale."
    ]
    },
    { id: 4,  title: "Massaggio Modellante Anticellulite", description: "Trattamento anticellulite con tecniche mirate e drenanti.", duration: "60 min", price: 30, isPromo: false, category: "massaggi",
        image: "img/massaggio-modellante-anticellulite.png",
    details: [
    "Riduzione della cellulite e pelle più liscia - Le tecniche mirate e gli strumenti in legno stimolano la microcircolazione, migliorando l'aspetto della pelle a 'buccia d'arancia'.",
    "Drenaggio dei liquidi in eccesso - Favorisce l'eliminazione di ristagni e gonfiori, specialmente nelle gambe e nelle zone soggette a ritenzione.",
    "Stimolazione del metabolismo locale - L'azione meccanica riattiva il metabolismo dei tessuti, aiutando a bruciare grassi in modo mirato.",
    "Modellamento della silhouette - Tonifica e ridefinisce le forme del corpo, migliorando la compattezza dei tessuti.",
    "Sensazione di leggerezza e vitalità - Dopo la seduta, il corpo appare più sgonfio, dinamico e pieno di energia."
    ]
    },
    { id: 5,  title: "Massaggio Sportivo", description: "Ideale per preparazione e recupero muscolare.", duration: "45 min", price: 30, isPromo: false, category: "massaggi",
        image: "img/massaggio-sportivo.png",
    details: [
    "Preparazione e recupero muscolare ottimali - Migliora l'elasticità e il tono muscolare prima dell'attività e accelera il recupero dopo lo sforzo.",
    "Riduzione di dolori e affaticamento - Aiuta a sciogliere acido lattico e tensioni accumulate, riducendo rigidità e indolenzimento.",
    "Prevenzione degli infortuni - Mantiene i muscoli flessibili e migliora la mobilità articolare, riducendo il rischio di strappi e contratture.",
    "Miglioramento della circolazione e dell'ossigenazione - Favorisce un apporto costante di ossigeno e nutrienti ai tessuti muscolari.",
    "Aumento della performance - Un corpo più libero da tensioni risponde meglio agli allenamenti e alle competizioni."
    ]
    },
    { id: 6,  title: "Massaggio con Pietre Calde", description: "Calore e manualità per rilassamento profondo.", duration: "60 min", price: 25, isPromo: false, category: "massaggi",
        image: "img/massaggio-pietre.png",
    details: [
    "Rilassamento profondo e immediato - Il calore penetra nei muscoli, sciogliendo tensioni più rapidamente rispetto a un massaggio tradizionale.",
    "Stimolazione della circolazione - La temperatura delle pietre favorisce la dilatazione dei vasi sanguigni, migliorando il flusso di sangue e ossigeno.",
    "Alleviamento dei dolori muscolari e articolari - Ideale per chi soffre di rigidità, contratture o dolori cronici legati a posture scorrette o stress.",
    "Effetto detox - Il calore favorisce la sudorazione e il drenaggio delle tossine accumulate nei tessuti.",
    "Benessere mente-corpo - La combinazione di calore e tocco manuale riduce ansia e tensione emotiva, regalando una sensazione di armonia e leggerezza."
    ]
    },
    { id: 7,  title: "Massaggio Gravidanza", description: "Massaggio dolce e sicuro per alleviare tensioni in gravidanza.", duration: "60 min", price: 30, isPromo: false, category: "massaggi",
        image: "img/massaggio-gravidanza.png",
    details: [
    "Alleviamento di dolori e tensioni muscolari - Riduce fastidi comuni come mal di schiena, dolori lombari e rigidità alle spalle.",
    "Riduzione di gonfiori a gambe e piedi - Favorisce la circolazione sanguigna e linfatica, diminuendo la ritenzione idrica.",
    "Miglioramento della postura - Aiuta ad adattarsi ai cambiamenti del corpo durante la gestazione, prevenendo tensioni e squilibri.",
    "Riduzione di stress e ansia - Favorisce un profondo rilassamento, migliorando anche la qualità del sonno.",
    "Connessione mamma-bambino - Il momento di cura e rilassamento favorisce un contatto più consapevole e armonioso con il piccolo."
    ]
    },
    { id: 8,  title: "Massaggio Anti-Stress", description: "Riflessologia plantare + massaggio testa per rilassare corpo e mente.", duration: "60 min", price: 25, isPromo: false, category: "massaggi",
        image: "img/massaggio-anti-stress.png",
    details: [
    "Rilassamento globale corpo-mente - La riflessologia agisce in profondità sul corpo attraverso i piedi, mentre il massaggio alla testa scioglie tensioni mentali ed emotive.",
    "Stimolazione energetica completa - Il lavoro sui punti riflessi e sul cranio favorisce un riequilibrio dell'energia vitale in tutto l'organismo.",
    "Miglioramento della circolazione e drenaggio - Favorisce un flusso sanguigno e linfatico più fluido, migliorando ossigenazione e detossinazione.",
    "Riduzione di stress, ansia e mal di testa - L'azione mirata alla testa e ai piedi aiuta a calmare la mente e ad alleviare disturbi legati a tensione nervosa.",
    "Sensazione di leggerezza e chiarezza mentale - Dopo la seduta, il corpo si sente più leggero e la mente più lucida, con un senso di armonia diffusa."
    ]
    },
    { id: 9,  title: "Massaggio Kairós '7 in 1'", description: "Trattamento multisensoriale con aromaterapia, pietre calde e shiatsu.", duration: "90 min", price: 50, isPromo: true, category: "massaggi",
        image: "img/massaggio-kairos.png",
    details: [
    "Immersione sensoriale totale - L'aromaterapia, la musica binaurale e il massaggiatore per occhi creano un'esperienza multisensoriale unica che favorisce rilassamento profondo.",
    "Rilascio di tensioni fisiche e mentali - Le tecniche manuali e con strumenti (gua sha, shiatsu, pietre calde) sciolgono rigidità muscolari e ristagni energetici.",
    "Stimolazione della circolazione e del drenaggio - La gua sha e la riflessologia plantare riattivano il flusso sanguigno e linfatico, migliorando ossigenazione e detossinazione.",
    "Armonizzazione dell'energia vitale - Lo shiatsu e la riflessologia riequilibrano i canali energetici, favorendo benessere globale.",
    "Effetto rigenerante e duraturo - Lascia una sensazione di leggerezza, centratura e rinnovata vitalità che perdura oltre la seduta."
    ]
    },
    { id: 10, title: "Massaggio Relax Totale '4 in 1'", description: "Rilassante, Reiki, Shiatsu e Riflessologia in un'unica esperienza.", duration: "90 min", price: 40, isPromo: true, category: "massaggi",
        image: "img/massaggio-relax-totale.png",
    details: [
    "Esperienza di benessere completa - Unisce tecniche occidentali e orientali per agire su corpo, mente ed energia in un'unica seduta.",
    "Rilassamento profondo e riequilibrio energetico - Il massaggio rilassante scioglie tensioni muscolari, mentre Reiki e Shiatsu armonizzano il flusso vitale.",
    "Stimolazione di organi e funzioni interne - La riflessologia plantare attiva punti collegati ai principali sistemi del corpo.",
    "Riduzione di stress, ansia e blocchi emotivi - Ogni tecnica contribuisce a liberare tensioni, portando calma e leggerezza interiore.",
    "Effetto rigenerante a lungo termine - Dopo la seduta ci si sente più leggeri, centrati e pieni di energia positiva."
    ]
    },
    { id: 11, title: "Riflessologia Plantare", description: "Tecnica sui punti riflessi dei piedi per riequilibrare corpo e mente.", duration: "60 min", price: 25, isPromo: false, category: "massaggi",
        image: "img/riflessologia-plantare.png",
    details: [
    "Stimolazione della circolazione sanguigna e linfatica - Migliora l'ossigenazione dei tessuti e favorisce l'eliminazione delle tossine.",
    "Riequilibrio degli organi e delle funzioni corporee - Agendo sui punti riflessi dei piedi, sostiene il corretto funzionamento di diversi sistemi del corpo.",
    "Riduzione di stress e tensioni - Favorisce un rilassamento profondo, sciogliendo blocchi sia fisici che emotivi.",
    "Sostegno al sistema immunitario - Stimola la capacità naturale del corpo di difendersi e rigenerarsi.",
    "Alleviamento di disturbi specifici - Può contribuire a migliorare problemi come mal di testa, disturbi digestivi o dolori muscolari attraverso il lavoro mirato sui punti riflessi."
    ]
    },
    { id: 12, title: "Reiki Usui", description: "Tecnica energetica per rilassamento profondo ed equilibrio interiore.", duration: "60 min", price: 25, isPromo: false, category: "massaggi",
        image: "img/reiki-usui.png",
    details: [
    "Profondo rilassamento e riduzione dello stress - L'energia armonizza il sistema nervoso, favorendo calma interiore e serenità.",
    "Riequilibrio energetico - Aiuta a sbloccare e ristabilire il flusso naturale dell'energia vitale (Ki) in tutto il corpo.",
    "Supporto alla guarigione naturale - Stimola la capacità innata dell'organismo di rigenerarsi a livello fisico, emotivo e mentale.",
    "Maggiore chiarezza e centratura mentale - Aiuta a liberare la mente da pensieri confusi o pesanti, migliorando la concentrazione.",
    "Armonia emotiva e spirituale - Favorisce il rilascio di emozioni represse, promuovendo un senso di pace profonda e connessione interiore."
    ]
    },
    { id: 13, title: "Massaggio Anti-Age Viso", description: "Trattamento viso per tonificare e ringiovanire la pelle.", duration: "45 min", price: 20, isPromo: false, category: "massaggi",
        image: "img/massaggio-viso.png",
    details: [
    "Stimolazione della circolazione sanguigna del viso - Migliora l'apporto di ossigeno e nutrienti alla pelle, rendendola più luminosa.",
    "Tonificazione muscolare - Lavora sui muscoli facciali per mantenere elasticità e prevenire rilassamenti.",
    "Riduzione delle rughe e linee d'espressione - Favorisce la produzione di collagene, attenuando i segni del tempo.",
    "Effetto liftante naturale - Dona un aspetto più compatto e giovane senza ricorrere a trattamenti invasivi.",
    "Rilassamento generale - Un momento di cura che dona benessere non solo alla pelle ma anche alla mente."
    ]
    },
    { id: 14, title: "Massaggio Focalizzato", description: "Trattamento specifico per una sola zona del corpo.", duration: "30 min", price: 15, isPromo: false, category: "massaggi",
        image: "img/massaggio-focalizzato.png",
    details: [
    "Azione mirata su una zona specifica - Indicato per chi ha dolori localizzati come cervicale, schiena o gambe.",
    "Sollievo immediato - Interviene rapidamente sul disturbo riducendo dolore e rigidità.",
    "Trattamento personalizzato - Tecniche adatte in base al tipo di tensione o blocco.",
    "Ideale in caso di poco tempo - Permette di prendersi cura di sé anche con una pausa breve.",
    "Prevenzione di dolori cronici - Un intervento regolare riduce il rischio che piccoli fastidi diventino problemi persistenti."
    ]
    },

    { id: 15, title: "Pulizia Viso Profonda", description: "Trattamento viso completo per pelle luminosa e purificata.", duration: "75 min", price: 55, isPromo: false, category: "estetica" },
    { id: 16, title: "Manicure e Smalto", description: "Cura unghie e applicazione smalto di qualità.", duration: "45 min", price: 25, isPromo: false, category: "estetica" },
    { id: 17, title: "Pedicure Base", description: "Cura dei piedi con trattamento estetico base.", duration: "45 min", price: 23, isPromo: false, category: "estetica" }
];



// =====================
// Cart functionality
// =====================
let cart = JSON.parse(localStorage.getItem('caritesCart')) || [];

// DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const cartIcon = document.getElementById('cart-icon');
const floatingCart = document.getElementById('floating-cart');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const servicesGrid = document.getElementById('services-grid');
const cartCount = document.getElementById('cart-count');
const floatingCartCount = document.getElementById('floating-cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const totalAmount = document.getElementById('total-amount');
const stripeBtn = document.getElementById("stripe-btn");

// =====================
// Initialize
// =====================
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    updateCartUI();
    initSmoothScroll();
    initMobileMenu();
    initCartFunctionality();
    updateCartCount(); // al cargar, refresca el número del carrito
});

// =====================
// Mobile menu
// =====================
function initMobileMenu() {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// =====================
// Smooth scroll
// =====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =====================
// Render services
// =====================
function renderServices() {
  const massaggiGrid = document.getElementById("services-grid");
  const esteticaGrid = document.getElementById("estetica-services");

  if (!massaggiGrid || !esteticaGrid) return;

  massaggiGrid.innerHTML = '';
  esteticaGrid.innerHTML = '';

  services.forEach(service => {
    const card = document.createElement('div');
    card.className = `service-card ${service.isPromo ? 'promo' : ''}`;
    card.innerHTML = `
    <h3 class="service-title">${service.title}</h3>
    <p class="service-description">${service.description}</p>
    <div class="service-details">
        <span class="service-duration">${service.duration}</span>
        <span class="service-price">€${service.price}</span>
    </div>
    <div class="service-buttons">
        <button class="btn btn-primary" onclick="addToCart(${service.id})">Aggiungi al Carrello</button>
        <button class="btn btn-secondary" onclick="openInfo(${service.id})">Maggiori Informazioni</button>
    </div>
    `;

    if (service.category === "estetica") {
    esteticaGrid.appendChild(card);
    } else {
    massaggiGrid.appendChild(card);
    }
});
}

// =====================
// Cart logic
// =====================
function initCartFunctionality() {
    cartIcon.addEventListener('click', openCart);
    floatingCart.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartModal);

    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
}

function addToCart(serviceId) {
    const service = services.find(s => s.id === serviceId);
    const existingItem = cart.find(item => item.id === serviceId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: service.id,
            title: service.title,
            price: service.price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showAddToCartFeedback();
}

function removeFromCart(serviceId) {
    cart = cart.filter(item => item.id !== serviceId);
    saveCart();
    updateCartUI();
}

function updateQuantity(serviceId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(serviceId);
        return;
    }
    
    const item = cart.find(item => item.id === serviceId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('caritesCart', JSON.stringify(cart));
}

function updateCartUI() {
    updateCartCount();
    renderCartItems();
    updateCartTotal();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    floatingCartCount.textContent = totalItems;
    
    if (totalItems > 0) {
        cartCount.classList.remove('hidden');
        floatingCartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
        floatingCartCount.classList.add('hidden');
    }
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Il carrello è vuoto</p>';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <div class="cart-item-price">€${item.price}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Rimuovi</button>
            </div>
        </div>
    `).join('');
}

let paypalRendered = false; // flag global

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  totalAmount.textContent = total.toFixed(0);

  if (cart.length > 0) {
    cartTotal.style.display = 'block';
    document.getElementById("stripe-btn").style.display = 'block';
    document.getElementById("paypal-button-container").style.display = 'block';

    //  Renderiza PayPal SOLO la primera vez
    if (!paypalRendered) {
      initPayPalButtons();
      paypalRendered = true;
    }

  } else {
    cartTotal.style.display = 'none';
    document.getElementById("stripe-btn").style.display = 'none';
    document.getElementById("paypal-button-container").style.display = 'none';
  }
}

function initPayPalButtons() {
  if (typeof paypal === "undefined") return;

  // Limpia el contenedor antes de renderizar
  const container = document.getElementById("paypal-button-container");
  container.innerHTML = "";

  paypal.Buttons({
  createOrder: async function(data, actions) {
    const res = await fetch("https://carites-backend.onrender.com/create-paypal-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart })
    });
    const order = await res.json();
    return order.id;
  },

  // PayPal Checkout
onApprove: async function(data, actions) {
  const res = await fetch(`https://carites-backend.onrender.com/capture-paypal-order/${data.orderID}`, {
    method: "POST"
  });
  const capture = await res.json();

  // Usamos directamente lo que devuelve el backend
  const paymentData = {
    orderId: capture.orderId,
    status: capture.status,
    paymentMethod: "PayPal",
    email: capture.email || null,   // email real del backend
    date: capture.date || new Date(),
    total: capture.total || 0,
    items: cart
  };

  localStorage.setItem("paymentData", JSON.stringify(paymentData));
  cart = [];
  saveCart();
  window.location.href = "thank-you.html";
}

}).render("#paypal-button-container");

}


function openCart() {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// =====================
// Stripe Checkout
// =====================
async function checkoutStripe() {
  if (cart.length === 0) return;

  const response = await fetch("https://carites-backend.onrender.com/create-stripe-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: cart }),
  });

  const data = await response.json();

  // Guardo datos previos al checkout (para thank-you.html)
  const paymentData = {
    orderId: data.id || "STRIPE_SESSION",
    status: "pending",
    paymentMethod: "Stripe",
    email: null,
    date: new Date(),
    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    items: cart
  };

  localStorage.setItem("paymentData", JSON.stringify(paymentData));

  // Redirige al checkout de Stripe
  window.location.href = data.url;
}


// =====================
// WhatsApp link
// =====================
function generateWhatsAppLink(serviceName) {
    const message = `Ciao, vorrei prenotare ${serviceName}.`;
    return `https://wa.me/placeholder?text=${encodeURIComponent(message)}`;
}

// =====================
// Feedback
// =====================
function showAddToCartFeedback() {
    const feedback = document.createElement('div');
    feedback.textContent = 'Aggiunto al carrello!';
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--primary-pink);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 3000;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        animation: fadeInOut 2s ease;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        document.body.removeChild(feedback);
        document.head.removeChild(style);
    }, 2000);
}

// =====================
// Navbar scroll effect
// =====================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// =====================
// Close cart with Escape
// =====================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cartModal.classList.contains('active')) {
        closeCartModal();
    }
});

// =====================
// Intersection Observer animations
// =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .promo-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

});


// =====================
// Info Modal 
// =====================
let currentServiceId = null;

function openInfo(serviceId) {
const service = services.find(s => s.id === serviceId);
if (!service) return;

    document.getElementById("modal-title").textContent = service.title;
    document.getElementById("modal-desc").textContent = service.description;
    document.getElementById("modal-durata").textContent = service.duration;
    document.getElementById("modal-prezzo").textContent = "€" + service.price;


    const imgEl = document.getElementById("modal-img");
if (service.image) {
    imgEl.src = service.image;
    imgEl.alt = service.title;
    imgEl.style.display = "block";
} else {
    imgEl.removeAttribute("src"); imgEl.alt = "";
    imgEl.style.display = "none";
}


  currentServiceId = service.id;

  // 👇 en lugar de display:block
  document.getElementById("info-modal").classList.add("active");
  document.body.style.overflow = "hidden";

  // Mostrar dettagli nel modal
const detailsContainer = document.getElementById("modal-details");
detailsContainer.innerHTML = "";
if (service.details && service.details.length > 0) {
const ul = document.createElement("ul");
service.details.forEach(detail => {
    const li = document.createElement("li");
    li.textContent = detail;
    ul.appendChild(li);
});

detailsContainer.appendChild(ul);
}
}

function closeInfo() {
  // 👇 en lugar de display:none
  document.getElementById("info-modal").classList.remove("active");
  document.body.style.overflow = "auto";
  currentServiceId = null;
}

// Aggiungi al carrello dal modal
document.getElementById("modal-add-cart").addEventListener("click", function() {
  if (currentServiceId) {
    addToCart(currentServiceId);
    closeInfo();
  }
});

// Chiudi cliccando fuori dal modal
document.getElementById("info-modal").addEventListener("click", function(e) {
  if (e.target === this) closeInfo();
});

// Chiudi con ESC
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && document.getElementById("info-modal").classList.contains("active")) {
    closeInfo();
  }
});
