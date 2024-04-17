document.querySelector('.hero-button').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: document.getElementById('product').offsetTop,
        behavior: 'smooth'
    });
});