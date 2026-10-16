// =========================================================================
// NOVOX STUDIO — MOTEUR INTERACTIF & SÉCURITÉ (PONYTAIL CLEAN ENGINE)
// =========================================================================

// CONTRÔLE DE SÉCURITÉ STRICT :
// Tant que SAFE_DEV_MODE = true, AUCUN email réel n'est envoyé à Formspree.
const SAFE_DEV_MODE = true;

const SIM_PRESETS = {
    btp: {
        badge: "Artisanat BTP & Couverture • Vosges & Grand Est",
        title: "Toiture, Zinguerie & Rénovation Garantie 10 Ans",
        desc: "Intervention rapide sous 24h, diagnostic d'étanchéité gratuit et galerie de chantiers vérifiés avant/après.",
        features: ["Garantie Décennale", "Urgence Fuite 7j/7", "Devis Photo Express", "Avis Clients 4.9/5"],
        cta: "Appeler l'Artisan en 1 Clic",
        accent: "#f59e0b",
        glow: "rgba(245, 158, 11, 0.14)",
        speed: "0.18s",
        score: "100 / 100",
        conv: "+310% d'appels"
    },
    piscine: {
        badge: "Piscines Miroir & Paysagisme • Prestige",
        title: "AURA — Conception de Bassins & Extérieurs d'Exception",
        desc: "Mise en scène plein écran de vos réalisations, comparateur avant/après interactif et estimation budgétaire qualifiée.",
        features: ["Bassins Sur-Mesure", "Avant / Après Interactif", "Filtre Budget", "Visuels Ultra-HD"],
        cta: "Estimer mon projet piscine",
        accent: "#00f0ff",
        glow: "rgba(0, 240, 255, 0.14)",
        speed: "0.21s",
        score: "100 / 100",
        conv: "Leads Qualifiés"
    },
    menuiserie: {
        badge: "Menuiserie, Bois & Agencement Intérieur",
        title: "Créations Bois Massif, Escaliers & Cuisines Sur-Mesure",
        desc: "Valorisez le savoir-faire de votre atelier avec un portfolio haute définition classé par essence et type de réalisation.",
        features: ["Fabrication Locale", "Galerie Atelier HD", "Prise de Côtes", "Zéro Intermédiaire"],
        cta: "Demander un chiffrage",
        accent: "#10b981",
        glow: "rgba(16, 185, 129, 0.14)",
        speed: "0.19s",
        score: "100 / 100",
        conv: "Panier Moyen x2"
    },
    solaire: {
        badge: "Énergie Solaire, PAC & Électricité RGE",
        title: "Autoconsommation Photovoltaïque & Domotique Connectée",
        desc: "Rassurez immédiatement vos clients particuliers et pros avec vos certifications RGE QualiPV et des études de rentabilité claires.",
        features: ["Certifié RGE QualiPV", "Bornes IRVE", "Dépannage Élec", "Suivi Chantier"],
        cta: "Calculer mes économies",
        accent: "#3b82f6",
        glow: "rgba(59, 130, 246, 0.16)",
        speed: "0.17s",
        score: "100 / 100",
        conv: "Confiance Totale"
    }
};

const BLUEPRINTS = {
    couverture: {
        title: "Couverture & Rénovation Premium",
        sector: "Toiture, Charpente, Zinguerie & Façade",
        sections: ["Hero avec bouton d'appel d'urgence 1-clic sur mobile", "Bandeau de réassurance : Garantie Décennale, RGE, Devis sous 48h", "Galerie de chantiers réels classés par commune", "Formulaire de diagnostic rapide sans friction"],
        impact: "Conçu pour capter les recherches locales urgentes et rassurer les propriétaires avant même le premier coup de téléphone."
    },
    ridezone: {
        title: "RideZone Ultra — Mobilité & Atelier",
        sector: "Trottinettes Électriques Haute Puissance, Cycles & Custom",
        sections: ["Vitrine Dark Mode haute tension (84V / Dual Motor)", "Catalogue de préparations atelier, SAV & pièces détachées", "Fiches techniques de performance et autonomie réelle", "Prise de rendez-vous atelier en direct"],
        impact: "Positionne immédiatement la boutique ou l'atelier comme la référence technique incontournable de sa région."
    },
    architecte: {
        title: "Cabinet d'Architecture & Maîtrise d'Œuvre",
        sector: "Architecture, Design d'Intérieur & Rénovation Globale",
        sections: ["Grille éditoriale minimaliste à fort contraste", "Monographies de projets avec plans et photographies grand angle", "Présentation de la méthodologie du permis de construire à la réception", "Prise de contact qualifiée par typologie et budget"],
        impact: "Impose un prestige immédiat face aux cabinets concurrents dotés de sites vieillissants."
    },
    piscine: {
        title: "AURA — Piscines Miroir & Extérieurs",
        sector: "Piscinistes, Spas, Terrasses & Paysagistes",
        sections: ["Immersion visuelle plein écran dès l'ouverture", "Comparateur Avant / Après interactif au doigt ou à la souris", "Présentation des finitions (béton armé, membrane, débordement)", "Pré-qualification de projet pour filtrer les demandes sérieuses"],
        impact: "Idéal pour les prestations à fort panier moyen (15 000 € à 80 000 €+)."
    },
    menuiserie: {
        title: "Menuiserie & Agencement Sur-Mesure",
        sector: "Menuisiers, Ébénistes, Cuisinistes & Escaliers",
        sections: ["Mise en valeur du travail artisanal et des matériaux nobles", "Portfolio filtrable : Intérieur, Extérieur, Escaliers, Terrasses bois", "Focus sur l'atelier local et la pose sans sous-traitance", "Demande de étude personnalisée avec envoi de croquis"],
        impact: "Transforme la visite en coup de cœur visuel et justifie vos tarifs face aux grandes enseignes industrielles."
    },
    solaire: {
        title: "Solaire Photovoltaïque & Pompe à Chaleur",
        sector: "Installateurs RGE, Climatisation, PAC & Énergies Renouvelables",
        sections: ["Mise en avant claire des labels RGE QualiPV / QualiPAC", "Explication pédagogique sans jargon des économies d'énergie", "Exemples d'installations locales avec production constatée", "Demande d'étude de rentabilité gratuite"],
        impact: "Élimine la méfiance liée au secteur énergétique grâce à une transparence locale irréprochable."
    },
    electricien: {
        title: "Électricité Générale & Domotique",
        sector: "Électriciens, Tableaux, Bornes IRVE & Maison Connectée",
        sections: ["Double entrée : Dépannage rapide & Projets neufs / rénovation", "Section dédiée aux normes NF C 15-100 et bornes de recharge", "Photos propres d'armoires électriques et d'éclairages architecturaux", "Appel direct prioritaire sur smartphone"],
        impact: "Valorise la rigueur technique et génère des chantiers complets autant que des dépannages."
    },
    terrassement: {
        title: "Terrassement, TP & Assainissement",
        sector: "Travaux Publics, VRD, Enrobés, Démolition & Micro-stations",
        sections: ["Présentation du parc matériel (pelles, bennes, brise-roche)", "Détail des prestations : fondations, viabilisation, assainissement, cours", "Réalisations avant/après sur terrains complexes", "Demande de visite sur terrain"],
        impact: "Donne une carrure d'entreprise structurée et solide aux artisans TP indépendants."
    },
    multiservices: {
        title: "Multi-Services, Rénovation & Paysage",
        sector: "Artisans Multi-compétences, Second Œuvre & Entretien",
        sections: ["Présentation claire des domaines d'intervention sans dispersion", "Forfaits et engagements de ponctualité", "Galerie avant/après de remises en état", "Contact ultra-rapide SMS / Appel / Email"],
        impact: "Clarifie immédiatement votre offre pour déclencher des interventions régulières."
    },
    plomberie: {
        title: "Plomberie, Chauffage & Salle de Bain",
        sector: "Plombiers-Chauffagistes, Création SDB & Dépannage",
        sections: ["Bouton d'urgence fuite / panne chauffage accessible au pouce", "Galerie de salles de bain clés en main et douches à l'italienne", "Transparence sur la zone d'intervention et les délais", "Formulaire de devis rénovation ou remplacement chaudière"],
        impact: "Combine la réactivité du dépannage avec la vente de chantiers salle de bain à forte marge."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) lucide.createIcons();

    // 1. Menu Mobile
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => navMenu.classList.toggle('is-open'));
    }

    // 2. Spotlight Bento Cards (Ponytail 6-liner)
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    // 3. Simulateur Studio Live (index.html)
    const simShell = document.getElementById('studio-simulator');
    if (simShell) {
        const viewport = document.getElementById('sim-viewport');
        const stage = document.getElementById('sim-stage');
        const renderPreset = (key) => {
            const p = SIM_PRESETS[key];
            if (!p) return;
            stage.style.setProperty('--sim-glow', p.glow);
            viewport.style.setProperty('--sim-accent', p.accent);
            document.getElementById('sim-badge').textContent = p.badge;
            document.getElementById('sim-title').textContent = p.title;
            document.getElementById('sim-desc').textContent = p.desc;
            document.getElementById('sim-cta').textContent = p.cta;
            document.getElementById('sim-cta').href = `contact.html?modele=${encodeURIComponent(p.title)}`;
            document.getElementById('sim-speed').textContent = p.speed;
            document.getElementById('sim-score').textContent = p.score;
            document.getElementById('sim-conv').textContent = p.conv;
            document.getElementById('sim-features').innerHTML = p.features
                .map(f => `<span class="mini-badge">${f}</span>`).join('');
        };

        simShell.querySelectorAll('[data-sim-preset]').forEach(btn => {
            btn.addEventListener('click', () => {
                simShell.querySelectorAll('[data-sim-preset]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderPreset(btn.dataset.simPreset);
            });
        });

        simShell.querySelectorAll('[data-sim-device]').forEach(btn => {
            btn.addEventListener('click', () => {
                simShell.querySelectorAll('[data-sim-device]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                viewport.classList.toggle('is-mobile', btn.dataset.simDevice === 'mobile');
            });
        });
    }

    // 4. Curseur Avant / Après Interactif (1-liner Ponytail)
    document.querySelectorAll('.ba-range').forEach(range => {
        range.addEventListener('input', e => {
            e.target.closest('.ba-comparator').style.setProperty('--split', `${e.target.value}%`);
        });
    });

    // 5. Calculateur d'Économies sur 1 à 5 ans (offre.html)
    const calcBox = document.getElementById('savings-calculator');
    if (calcBox) {
        const yearsInput = document.getElementById('calc-years');
        const typeSelect = document.getElementById('calc-competitor');
        const updateCalc = () => {
            const years = parseInt(yearsInput.value, 10) || 3;
            const mode = typeSelect.value;
            const months = years * 12;
            const competitorTotal = mode === 'agency' ? (3500 + 85 * months) : (490 + 129 * months);
            const novoxTotal = 1000;
            const saved = competitorTotal - novoxTotal;
            document.getElementById('calc-years-label').textContent = `${years} ${years > 1 ? 'ans' : 'an'}`;
            document.getElementById('calc-comp-cost').textContent = `${competitorTotal.toLocaleString('fr-FR')} €`;
            document.getElementById('calc-saved').textContent = `+ ${saved.toLocaleString('fr-FR')} €`;
        };
        yearsInput.addEventListener('input', updateCalc);
        typeSelect.addEventListener('change', updateCalc);
        updateCalc();
    }

    // 6. Filtres Portfolio & Modale d'Inspection Technique (portfolio.html)
    const filterBtns = document.querySelectorAll('[data-filter]');
    const portfolioCards = document.querySelectorAll('.portfolio-card[data-category]');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const cat = btn.dataset.filter;
                portfolioCards.forEach(card => {
                    card.hidden = !(cat === 'all' || card.dataset.category.includes(cat));
                });
            });
        });
    }

    const modal = document.getElementById('blueprint-dialog');
    if (modal) {
        document.querySelectorAll('[data-blueprint]').forEach(btn => {
            btn.addEventListener('click', () => {
                const bp = BLUEPRINTS[btn.dataset.blueprint];
                if (!bp) return;
                document.getElementById('bp-title').textContent = bp.title;
                document.getElementById('bp-sector').textContent = bp.sector;
                document.getElementById('bp-impact').textContent = bp.impact;
                document.getElementById('bp-list').innerHTML = bp.sections
                    .map(s => `<li><i data-lucide="check-circle-2"></i><span>${s}</span></li>`).join('');
                document.getElementById('bp-order-link').href = `contact.html?modele=${encodeURIComponent(bp.title)}`;
                if (window.lucide) lucide.createIcons();
                modal.showModal();
            });
        });
        modal.addEventListener('click', e => {
            if (e.target === modal || e.target.closest('[data-close-modal]')) modal.close();
        });
    }

    // 7. Pré-remplissage intelligent du modèle sur contact.html (?modele=...)
    const params = new URLSearchParams(window.location.search);
    const requestedModel = params.get('modele');
    const modelSelect = document.getElementById('form-model');
    const msgBox = document.getElementById('form-message');
    if (requestedModel && modelSelect) {
        const kw = requestedModel.toLowerCase().split(/[\s,—&-]+/).find(Boolean);
        const match = kw && Array.from(modelSelect.options).find(opt => (opt.value + ' ' + opt.textContent).toLowerCase().includes(kw));
        if (match) modelSelect.value = match.value;
        if (msgBox && !msgBox.value) {
            msgBox.value = `Bonjour, je souhaite recevoir un aperçu privé et lancer mon site sur la base du modèle "${requestedModel}".`;
        }
    }

    // 8. Formulaire de contact sécurisé
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && submitBtn && formFeedback) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.textContent = "Transmission sécurisée...";
            submitBtn.disabled = true;

            if (SAFE_DEV_MODE) {
                setTimeout(() => {
                    formFeedback.className = 'form-alert safe-mode';
                    formFeedback.innerHTML = `<strong>Simulation validée :</strong> Votre configuration a bien été vérifiée. En mode protection (SAFE_DEV_MODE), aucun e-mail externe n'est déclenché. Écrivez directement à <strong>contact.novox@proton.me</strong> pour une prise en charge immédiate.`;
                    contactForm.reset();
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                }, 450);
                return;
            }

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    formFeedback.className = 'form-alert success';
                    formFeedback.innerHTML = `<strong>Demande envoyée !</strong> Notre studio vous répond sous 4 heures.`;
                    contactForm.reset();
                } else {
                    throw new Error('Erreur réseau');
                }
            } catch {
                formFeedback.className = 'form-alert';
                formFeedback.style.display = 'block';
                formFeedback.style.background = 'rgba(239, 68, 68, 0.12)';
                formFeedback.style.color = '#f87171';
                formFeedback.innerHTML = `Une erreur est survenue. Écrivez-nous directement à <strong>contact.novox@proton.me</strong>`;
            } finally {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    // 9. Lecture automatique fluide des vidéos d'aperçu
    const previewVideos = document.querySelectorAll('video.preview-video');
    if (previewVideos.length > 0 && 'IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) video.play().catch(() => {});
                else video.pause();
            });
        }, { threshold: 0.15 });
        previewVideos.forEach(video => {
            video.muted = true;
            videoObserver.observe(video);
        });
    }
});

// =========================================================================
// 10. PROTECTION CODE SOURCE & MÉDIAS NOVOX STUDIO (ANTI-INSPECTION)
// =========================================================================
(function initNovoxSecurity() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
        const isCtrl = e.ctrlKey || e.metaKey;
        if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); return false; }
        if (isCtrl && ['u', 'U', 's', 'S'].includes(e.key)) { e.preventDefault(); return false; }
        if (isCtrl && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) { e.preventDefault(); return false; }
    });
    document.addEventListener('dragstart', e => {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') e.preventDefault();
    });
})();
