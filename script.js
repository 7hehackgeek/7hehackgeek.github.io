// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.collection-card, .feature-item, .info-card, .about-text, .about-image');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Add sparkle animation to collection cards
document.querySelectorAll('.collection-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s ease';
    });
});

// Animate numbers/counters (if needed in future)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Google Maps - Update iframe src with actual coordinates
// You can replace this with the actual Google Maps embed URL from your location
function updateMapLocation() {
    // This function can be used to dynamically update the map
    // For now, the iframe src in HTML should be updated with the actual location
    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe) {
        // The iframe src should be updated with the actual Google Maps embed URL
        // You can get this from: https://www.google.com/maps -> Share -> Embed a map
    }
}

// Add click effect to CTA button
document.querySelector('.cta-button')?.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Prevent default behavior for empty links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

