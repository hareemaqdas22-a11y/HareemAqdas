// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Form submission with human touch
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const personalizedMsg = name ? 
            `Thank you ${name.split(' ')[0]}, I'll respond personally within 48 hours.` : 
            'Thank you for reaching out. I read every message personally and will respond soon.';
        
        alert(personalizedMsg);
        contactForm.reset();
    });
}
// Add human interaction delay for animations
setTimeout(() => {
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}, 300);

// Mobile menu toggle
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !isHidden);
        mobileMenuButton.innerHTML = isHidden ? 
            '<i data-feather="x"></i>' : 
            '<i data-feather="menu"></i>';
        feather.replace();
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = '<i data-feather="menu"></i>';
        feather.replace();
    });
});

