/**
 * EXTENSION APP.JS - MORAIS CLEANING
 * 
 * Ajout des fonctionnalités :
 * - Bouton WhatsApp flottant global
 * - Initialisation formulaires n8n
 * - Améliorations UX
 * 
 * À ajouter À LA FIN de app.js (avant la fermeture de la fonction IIFE)
 * juste AVANT la section AUTO-INITIALISATION
 */

// ============================================================
// BOUTON WHATSAPP FLOTTANT GLOBAL
// ============================================================

function initWhatsAppButton() {
    // Vérifier si le bouton existe déjà
    if (document.querySelector('.whatsapp-float')) {
        return;
    }
    
    // Créer le bouton WhatsApp flottant
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/32478951269?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20un%20service%20de%20nettoyage.';
    whatsappBtn.className = 'whatsapp-float pulse';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.setAttribute('aria-label', 'Contactez-nous sur WhatsApp');
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    
    // Ajouter au body
    document.body.appendChild(whatsappBtn);
    
    console.log('✅ Bouton WhatsApp initialisé');
}

// ============================================================
// FORMULAIRES N8N (ASYNCHRONE)
// ============================================================

async function initN8NForms() {
    // Vérifier si on est sur une page avec formulaire
    const hasContactForm = document.getElementById('contact-form');
    const hasRecruitForm = document.getElementById('recruitment-form') || document.getElementById('recrutement-form');
    
    if (!hasContactForm && !hasRecruitForm) {
        return; // Pas de formulaire sur cette page
    }
    
    try {
        // Importer dynamiquement le module forms-manager
        const formsModule = await import('./forms-manager.js');
        
        // Initialiser les formulaires
        formsModule.initForms();
        
        console.log('✅ Formulaires n8n initialisés');
        
    } catch (error) {
        console.warn('⚠️ Impossible de charger forms-manager.js:', error);
        console.warn('Les formulaires fonctionneront en mode dégradé');
    }
}

// ============================================================
// FAQ ACCORDION (TOUTES PAGES)
// ============================================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length === 0) {
        return; // Pas de FAQ sur cette page
    }
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (!question) return;
        
        question.addEventListener('click', () => {
            // Toggle current item
            const isOpen = item.classList.toggle('open');
            
            // Fermer les autres items (optionnel - comportement accordion)
            if (isOpen) {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                    }
                });
            }
        });
    });
    
    console.log(`✅ FAQ initialisée (${faqItems.length} items)`);
}

// ============================================================
// BOUTONS CTA "DEVIS" INTELLIGENTS
// ============================================================

function initDevisButtons() {
    const devisButtons = document.querySelectorAll('.devis-btn, .btn-devis, [href="#devis"], [data-action="devis"]');
    
    if (devisButtons.length === 0) {
        return;
    }
    
    devisButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Si on est sur index.html ET que la section #devis existe
            if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
                const devisSection = document.getElementById('devis');
                if (devisSection) {
                    devisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                }
            }
            
            // Sinon, rediriger vers index.html#devis
            window.location.href = '/index.html#devis';
        });
    });
    
    console.log(`✅ Boutons devis initialisés (${devisButtons.length})`);
}

// ============================================================
// BOUTONS CTA "CONTACT" INTELLIGENTS
// ============================================================

function initContactButtons() {
    const contactButtons = document.querySelectorAll('.contact-btn, .btn-contact, [data-action="contact"]');
    
    if (contactButtons.length === 0) {
        return;
    }
    
    contactButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/public/pages/contact.html';
        });
    });
    
    console.log(`✅ Boutons contact initialisés (${contactButtons.length})`);
}

// ============================================================
// BACK TO TOP (SCROLL)
// ============================================================

function initBackToTop() {
    const backToTopBtn = document.getElementById('mc-back-to-top');
    
    if (!backToTopBtn) {
        return;
    }
    
    // Afficher/masquer selon scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Clic pour remonter
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('✅ Bouton "Retour en haut" initialisé');
}

// ============================================================
// MODIFICATION DE LA FONCTION PRINCIPALE initApp()
// ============================================================

/*
 * INSTRUCTIONS :
 * 
 * Dans la fonction initApp() existante, APRÈS l'étape 7 (chargement traductions),
 * AJOUTER ces lignes AVANT le console.log final :
 * 
 *     // 8. Initialiser WhatsApp flottant
 *     initWhatsAppButton();
 *     
 *     // 9. Initialiser formulaires n8n
 *     await initN8NForms();
 *     
 *     // 10. Initialiser FAQ
 *     initFAQ();
 *     
 *     // 11. Initialiser boutons CTA
 *     initDevisButtons();
 *     initContactButtons();
 *     
 *     // 12. Initialiser back to top
 *     initBackToTop();
 * 
 * Ces fonctions viennent s'ajouter à l'orchestration existante.
 */
