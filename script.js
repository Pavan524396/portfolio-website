
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Toggle bars for visual feedback
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.remove('active'));
}));

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Back-to-Top Button Visibility
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll Animations: Fade-in and slide-up for elements with .animate-on-scroll
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

// Observe all animate-on-scroll elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Typing Effect for Hero Subtitle (Enhances CSS animation; starts after page load)
window.addEventListener('load', () => {
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        // CSS handles the main animation, but this JS resets/restarts it for reliability
        typingElement.style.animation = 'none';
        setTimeout(() => {
            typingElement.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
        }, 100);
    }
});

// Simple Form Submission (Demo - Replace with real backend like EmailJS or Formspree)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate submission
    alert('Thank you for your message, Majji Pavan! (Demo: In production, integrate with a backend for email sending.)');
    this.reset();
});

// Optional: Add a subtle glow pulse to nav on scroll
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 123, 255, 0.1)';
    }
    
    // Parallax-like effect for hero particles
    const particles = document.querySelector('.hero-bg-particles');
    if (particles && window.scrollY < window.innerHeight) {
        particles.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});