// public/scripts/script.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authLinks = document.querySelector('.auth-links');
    

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    authLinks.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.add('hide');
        } else {
            // Scrolling up
            header.classList.remove('hide');
        }
        lastScrollY = window.scrollY;
    });


    

});


// manejar el evento de ocultar el toolbar al hacer scroll y mostrarlo al hacer scroll hacia arriba

// public/scripts/script.js

document.addEventListener('DOMContentLoaded', () => {
    
});
