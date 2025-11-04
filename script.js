// Configuration
const WHATSAPP_NUMBER = '60123456789';

// Update all WhatsApp links with configured number
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        if (currentHref.includes('wa.me/')) {
            link.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}`);
        }
    });
});

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Lead Form Submission Handler
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const area = document.getElementById('area').value;
    const propertyType = document.getElementById('propertyType').value;
    const budget = document.getElementById('budget').value;
    const style = document.getElementById('style').value;
    const showroom = document.getElementById('showroom').value;
    
    // Create WhatsApp message
    const message = `Hi AZ, I'm ${name}. My area is ${area}, and I live in a ${propertyType}. My budget is around ${budget}, and I'm interested in a ${style} style. I would like to visit the showroom: ${showroom}.`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset form after submission
    // this.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 60; // Match sticky header height
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.sticky-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
