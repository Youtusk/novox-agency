document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des icônes Lucide
    lucide.createIcons();

    // Animations au scroll (Apparition fluide)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // On arrête d'observer une fois affiché
            }
        });
    }, observerOptions);

    // Ajouter la classe fade-in aux sections et les observer
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Gestion du formulaire de contact (Envoi réel via Formspree)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = "Envoi en cours...";
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Animation de succès
                btn.textContent = "Demande envoyée avec succès !";
                btn.style.background = "#10b981"; // Vert succès
                form.reset();
            } else {
                btn.textContent = "Erreur. Veuillez réessayer.";
                btn.style.background = "#ef4444"; // Rouge erreur
            }
        } catch (error) {
            btn.textContent = "Erreur de connexion.";
            btn.style.background = "#ef4444";
        }
        
        // Remise à zéro après 3 secondes
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "var(--primary)";
        }, 3000);
    });

    // --- EFFET WOW: BACKGROUND INTERACTIF ---
    const glow = document.querySelector('.background-glow');
    
    // --- EFFET WOW: CURSEUR PERSONNALISÉ ---
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // Curseur
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Animation fluide pour l'outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });

        // Background glow suit la souris avec un décalage
        glow.animate({
            left: `${posX - 300}px`, /* centré */
            top: `${posY - 300}px`
        }, { duration: 3000, fill: "forwards" });
    });

    // Effet hover du curseur
    document.querySelectorAll('a, button, input, textarea, .card, .portfolio-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // --- EFFET WOW: MACHINE A ECRIRE ---
    const words = ["modernes.", "rapides.", "rentables.", "sur-mesure."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeElement = document.querySelector('.typewriter');

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause quand le mot est complet
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause avant de taper le prochain
        }

        setTimeout(typeEffect, typeSpeed);
    }
    
    // Lancer la machine à écrire
    if(typeElement) setTimeout(typeEffect, 1000);
});
