document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('mainContactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener valores de los campos
        const nombre = document.getElementById('nombre').value;
        const empresa = document.getElementById('empresa').value || 'Particular';
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Construir mensaje de WhatsApp
        const phone = "573138932217";
        const text = `Hola J.A.V. Dev Group! Mi nombre es ${nombre} de la empresa ${empresa}. Mi correo es ${email} y me gustaría consultar por: ${mensaje}`;
        
        // Codificar el texto para URL
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        // Redirigir a WhatsApp
        window.open(whatsappUrl, '_blank');
    });

    // Efecto de scroll suave para la navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
