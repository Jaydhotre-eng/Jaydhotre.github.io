// Mobile Menu Toggle
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const body = document.body;

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        body.classList.add('menu-open');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    });
}

// Close mobile menu when clicking on overlay
if (nav) {
    // Close mobile menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside (on overlay)
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            e.target !== bar &&
            !bar.contains(e.target)) {
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

// Product Image Gallery
const mainImg = document.getElementById('MainImg');
const smallImg = document.getElementsByClassName('small-img');

if (mainImg && smallImg.length > 0) {
    smallImg[0].onclick = function() {
        mainImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function() {
        mainImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function() {
        mainImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function() {
        mainImg.src = smallImg[3].src;
    }
}

// Newsletter Form Validation
const newsletterForm = document.querySelector('#newsletter .form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="text"]').value;
        if (email && email.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Contact Form Validation
const contactForm = document.querySelector('#form-details form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;

        if (name && email && subject && message) {
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add to Cart Animation
const cartButtons = document.querySelectorAll('.cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const product = this.closest('.pro');
        if (product) {
            product.style.transform = 'scale(0.95)';
            setTimeout(() => {
                product.style.transform = 'scale(1)';
                alert('Product added to cart!');
            }, 200);
        }
    });
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}); 