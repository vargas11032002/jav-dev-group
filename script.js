// --- 1. Generador de partículas ---
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

// --- 2. Control de Animación Reveal y Header ---
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

    const header = document.getElementById('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
}

// --- 3. Contador de estadísticas (6 Meses / Clientes Reales) ---
let started = false;

function animateNumbers() {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const pos = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (pos < windowHeight - 100 && !started) {
        started = true;
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            let count = 0;
            const updateCount = () => {
                const speed = 50; 
                const inc = target / speed;
                if (count < target) {
                    count += inc;
                    stat.innerText = Math.ceil(count);
                    setTimeout(updateCount, 25);
                } else {
                    // Sufijos personalizados para J.A.V. Dev Group
                    if (target === 6) {
                        stat.innerText = "6 Meses";
                    } else if (target === 100) {
                        stat.innerText = "100%";
                    } else if (target === 4) {
                        stat.innerText = "4 Proyectos";
                    } else {
                        stat.innerText = target + "+";
                    }
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
    reveal();
    
    // Toggle Menú Móvil
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
