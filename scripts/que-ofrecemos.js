document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.5 });

    const cards = document.querySelectorAll('.element-card');
    cards.forEach((card) => observer.observe(card));
});

// Asumiendo que tienes una función para desplazarse a los targets
document.querySelectorAll('button[data-target]').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
