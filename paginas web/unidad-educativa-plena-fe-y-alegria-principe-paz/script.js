// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

function showSlide(index) {
    const slideContainer = document.querySelector('.carousel-slide');
    slideContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listeners for buttons
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Form validation and submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    // Simulate form submission
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    
    // Reset form
    this.reset();
});
