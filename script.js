// =====================
// Service data
// =====================
const services = [
    {
        id: 1,
        title: 'Massaggio Decontratturante',
        description: 'Massaggio terapeutico per sciogliere tensioni e contratture muscolari.',
        duration: '60 min',
        price: 45,
        isPromo: false
    },
    {
        id: 2,
        title: 'Massaggio Linfodrenante',
        description: 'Trattamento per stimolare il sistema linfatico e ridurre gonfiori.',
        duration: '50 min',
        price: 40,
        isPromo: true
    },
    {
        id: 3,
        title: 'Trattamento Anticellulite',
        description: 'Trattamento specifico per contrastare gli inestetismi della cellulite.',
        duration: '60 min',
        price: 50,
        isPromo: false
    },
    {
        id: 4,
        title: 'Pulizia Viso Profonda',
        description: 'Trattamento viso completo per una pelle luminosa e purificata.',
        duration: '75 min',
        price: 55,
        isPromo: false
    },
    {
        id: 5,
        title: 'Manicure e Smalto',
        description: 'Cura completa delle unghie con applicazione smalto di alta qualità.',
        duration: '45 min',
        price: 25,
        isPromo: true
    },
    {
        id: 6,
        title: 'Trattamento Rilassante',
        description: 'Massaggio total body per rilassare corpo e mente.',
        duration: '90 min',
        price: 65,
        isPromo: false
    }
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
const checkoutBtn = document.getElementById('checkout-btn');

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
    servicesGrid.innerHTML = '';
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = `service-card ${service.isPromo ? 'promo' : ''}`;
        
        serviceCard.innerHTML = `
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <div class="service-details">
                <span class="service-duration">${service.duration}</span>
                <span class="service-price">€${service.price}</span>
            </div>
            <div class="service-buttons">
                <button class="btn btn-primary" onclick="addToCart(${service.id})">
                    Aggiungi al Carrello
                </button>
                <a href="${generateWhatsAppLink(service.title)}" class="btn btn-secondary">
                    Prenota Ora
                </a>
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
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

    checkoutBtn.addEventListener('click', checkout);
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

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = total.toFixed(0);
    
    if (cart.length > 0) {
        cartTotal.style.display = 'block';
        checkoutBtn.style.display = 'block';
    } else {
        cartTotal.style.display = 'none';
        checkoutBtn.style.display = 'none';
    }
}

function openCart() {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function checkout() {
    if (cart.length === 0) return;
    
    let message = 'Ciao, vorrei prenotare i seguenti servizi:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        message += `• ${item.title} (x${item.quantity}) - €${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });
    
    message += `\nTotale: €${total}\n\nGrazie!`;
    
    const whatsappUrl = `https://wa.me/placeholder?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    cart = [];
    saveCart();
    updateCartUI();
    closeCartModal();
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
