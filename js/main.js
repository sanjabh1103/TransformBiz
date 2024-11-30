// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop({
            behavior: 'smooth'
        });
    });
});

// Add header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// Simple testimonial carousel
let currentTestimonial = 0;
const testimonials = [
    {
        text: "TransformBiz helped us achieve a 40% increase in operational efficiency.",
        author: "John Smith, CEO of TechCorp"
    },
    {
        text: "Their expertise in digital transformation was invaluable to our growth.",
        author: "Sarah Johnson, CTO of InnovateNow"
    },
    {
        text: "Outstanding service and remarkable results in our ERP implementation.",
        author: "Michael Brown, Operations Director at GlobalTech"
    }
];

function updateTestimonial() {
    const testimonialContainer = document.querySelector('.testimonial');
    const currentTest = testimonials[currentTestimonial];
    
    testimonialContainer.innerHTML = `
        <p>"${currentTest.text}"</p>
        <cite>- ${currentTest.author}</cite>
    `;
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Change testimonial every 5 seconds
setInterval(updateTestimonial, 5000);

// Initialize first testimonial
updateTestimonial();

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .insight-card').forEach(el => {
    observer.observe(el);
});
