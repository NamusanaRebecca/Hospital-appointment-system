// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
        themeBtn.innerHTML = body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Modals
    const loginLink = document.querySelector('.login-link');
    const signupLink = document.querySelector('.signup-link');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closes = document.querySelectorAll('.close');

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });

    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'block';
    });

    closes.forEach(close => {
        close.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === signupModal) signupModal.style.display = 'none';
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('contactSuccess').style.display = 'block';
        this.reset();
        setTimeout(() => document.getElementById('contactSuccess').style.display = 'none', 5000);
    });

     // Form submissions (demo - shows success message)
    document.getElementById('appointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('appointSuccess').style.display = 'block';
        this.reset();
        setTimeout(() => document.getElementById('appointSuccess').style.display = 'none', 5000);
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('contactSuccess').style.display = 'block';
        this.reset();
        setTimeout(() => document.getElementById('contactSuccess').style.display = 'none', 5000);
    });
            

    // Smooth scroll (if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
