// JavaScript code in index.html
// Select all service cards
const serviceCards = document.querySelectorAll('.service-card');

// Add click event listener to each service card
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url'); // Get the URL from data-url attribute
        window.open(url, '_blank'); // Open the URL in a new tab
    });
});

// Toggle Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Gallery Image Modal
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content"><img src="${img.src}" alt="${img.alt}"><span class="close">&times;</span></div>`;
        document.body.appendChild(modal);

        const closeModal = modal.querySelector('.close');
        closeModal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });
});
