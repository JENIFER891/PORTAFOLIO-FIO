// main.js - Funcionalidades principales del portafolio

// 1. Navegación activa (resalta el enlace de la página actual)
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// 2. Efectos de hover para proyectos
const proyectos = document.querySelectorAll('.proyecto');
if (proyectos) {
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseenter', () => {
            proyecto.style.transform = 'translateY(-5px)';
        });
        proyecto.addEventListener('mouseleave', () => {
            proyecto.style.transform = 'none';
        });
    });
}

// 3. Funcionalidad para el botón de descarga del CV
const downloadBtn = document.querySelector('.boton-descarga');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        console.log('Descargando CV...');
        // Aquí podrías añadir tracking de Google Analytics
    });
}

// 4. Animaciones al hacer scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animated');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}