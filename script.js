// =========================================================================
// NOVOX STUDIO — CONTRÔLEUR JS ÉPURÉ (ZÉRO ARTIFICE INUTILE)
// =========================================================================

// CONTRÔLE DE SÉCURITÉ STRICT :
// Tant que SAFE_DEV_MODE = true, AUCUN email n'est envoyé à Formspree ni à contact.novox@proton.me.
// Passez à false uniquement lors de la mise en ligne finale sur GitHub Pages.
const SAFE_DEV_MODE = true;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialisation des icônes SVG Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Gestion du formulaire de contact sobre
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && submitBtn && formFeedback) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Envoi en cours...";
            submitBtn.disabled = true;

            // CAS 1 : MODE SÉCURISÉ (Tests locaux sans aucun email réel)
            if (SAFE_DEV_MODE) {
                setTimeout(() => {
                    formFeedback.className = 'form-alert safe-mode';
                    formFeedback.innerHTML = `<strong>Simulation réussie :</strong> Vos informations sont valides. En mode développement, aucun e-mail réel n'est expédié.`;
                    contactForm.reset();
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }, 500);
                return;
            }

            // CAS 2 : PRODUCTION (Formspree)
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formFeedback.className = 'form-alert success';
                    formFeedback.innerHTML = `<strong>Message envoyé !</strong> Nous vous recontacterons sous 4 heures.`;
                    contactForm.reset();
                } else {
                    throw new Error('Erreur de transmission');
                }
            } catch (error) {
                formFeedback.className = 'form-alert';
                formFeedback.style.display = 'block';
                formFeedback.style.background = 'rgba(239, 68, 68, 0.1)';
                formFeedback.style.color = '#f87171';
                formFeedback.innerHTML = `Une erreur est survenue. Vous pouvez nous écrire à contact.novox@proton.me`;
            } finally {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    // 3. Gestion intelligente des aperçus vidéo (autoplay fluide & économie de ressources)
    const previewVideos = document.querySelectorAll('video.preview-video');
    if (previewVideos.length > 0) {
        if ('IntersectionObserver' in window) {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.15 });

            previewVideos.forEach(video => {
                video.muted = true;
                videoObserver.observe(video);
            });
        } else {
            previewVideos.forEach(video => {
                video.muted = true;
                video.play().catch(() => {});
            });
        }
    }
});

// =========================================================================
// 4. PROTECTION CODE SOURCE & MÉDIAS NOVOX STUDIO (ANTI-INSPECTION)
// =========================================================================
(function initNovoxSecurity() {
    // Désactivation du clic droit sur tout le site
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Blocage des raccourcis clavier inspecteur (F12, Ctrl+U, Ctrl+Shift+I, etc.)
    document.addEventListener('keydown', (e) => {
        const isCtrl = e.ctrlKey || e.metaKey;
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (Afficher le code source)
        if (isCtrl && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Outils de développement)
        if (isCtrl && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Enregistrer la page)
        if (isCtrl && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
    });

    // Empêcher le glisser-déposer des vidéos et des images
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
            e.preventDefault();
        }
    });
})();
