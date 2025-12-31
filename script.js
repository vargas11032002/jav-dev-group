// --- 1. Generador de partículas suave ---
const particlesContainer = document.getElementById('particles');

function initParticles() {
    if (!particlesContainer) return;
    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: ${Math.random() > 0.5 ? '#4CAF50' : '#2196F3'};
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5};
            pointer-events: none;
            border-radius: 50%;
        `;
        particlesContainer.appendChild(p);
    }
}

// --- 2. Control del Header y Animación Reveal ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });

    // Control del Header
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
}

// --- 3. Contador de estadísticas optimizado ---
let started = false; // Para que solo se ejecute una vez

function animateNumbers() {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const pos = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si la sección es visible y no ha empezado la animación
    if (pos < windowHeight - 100 && !started) {
        started = true;
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            let count = 0;
            const updateCount = () => {
                const speed = 100; // Ajusta velocidad
                const inc = target / speed;
                if (count < target) {
                    count += inc;
                    stat.innerText = Math.ceil(count);
                    setTimeout(updateCount, 20);
                } else {
                    stat.innerText = target + (target === 100 ? "%" : "+");
                }
            };
            updateCount();
        });
    }
}

// --- 4. Eventos Globales ---
window.addEventListener("scroll", () => {
    reveal();
    animateNumbers();
});

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    reveal(); // Para mostrar lo que ya está en pantalla al cargar
});