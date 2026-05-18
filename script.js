document.addEventListener('DOMContentLoaded', () => {

    // ─── FORMULARIO WHATSAPP ───────────────────────────────────────
    const contactForm = document.getElementById('mainContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre  = document.getElementById('nombre').value;
            const empresa = document.getElementById('empresa').value || 'Particular';
            const email   = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            const phone   = "573138932217";
            const text    = `Hola J.A.V. Dev Group! Mi nombre es ${nombre} de la empresa ${empresa}. Mi correo es ${email} y me gustaría consultar por: ${mensaje}`;
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
        });
    }

    // ─── SCROLL SUAVE NAV ─────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                // Cerrar menú móvil si está abierto
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
            }
        });
    });

    // ─── MENÚ HAMBURGUESA ─────────────────────────────────────────
    const hamburger  = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
        });

        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('open');
            }
        });
    }

    // ─── FILTROS DE PORTAFOLIO ────────────────────────────────────
    const filterBtns = document.querySelectorAll('.pf-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botón activo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            portfolioCards.forEach(card => {
                const cats = card.dataset.cat || '';
                if (filter === 'all' || cats.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

});

