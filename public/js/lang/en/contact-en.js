// contact-en.js - Complete English translation for Contact page

function translateContactToEnglish() {
    console.log('🌍 Translating Contact page to English - FULL TRANSLATION...');
    
    try {
        // ============================================
        // META & TITLE
        // ============================================
        document.title = 'Free Quote - Morais Cleaning - Professional Cleaning Brussels';
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Request your free quote for all professional cleaning services in Brussels. Transparent, fast, and tailored to your specific needs.');
        }
        
        // ============================================
        // HERO SECTION
        // ============================================
        const heroBadge = document.querySelector('.hero-badge span');
        if (heroBadge) {
            heroBadge.textContent = 'FREE QUOTE - NO COMMITMENT';
        }
        
        const heroTitle = document.querySelector('#hero-title, .hero-title');
        if (heroTitle) {
            heroTitle.textContent = 'Get Your Personalized Quote';
        }
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = 'Request your free estimate for all professional cleaning services in Brussels. Transparent, fast, and tailored to your specific needs.';
        }
        
        // Hero features (4 cards)
        const heroFeatures = document.querySelectorAll('.hero-feature span');
        if (heroFeatures.length >= 4) {
            heroFeatures[0].textContent = 'Response within 24 hours max';
            heroFeatures[1].textContent = 'Free quote with no commitment';
            heroFeatures[2].textContent = 'Transparent pricing, no surprises';
            heroFeatures[3].textContent = 'Fast startup possible';
        }
        
        // Hero CTA
        const heroCTA = document.querySelectorAll('.hero-content .btn, .btn-accent');
        heroCTA.forEach(btn => {
            if (btn.textContent.includes('Commencer') || btn.textContent.includes('estimation')) {
                btn.innerHTML = '<i class="fas fa-calculator"></i> Start the estimate';
            }
        });
        
        // ============================================
        // CALCULATOR SECTION
        // ============================================
        const calcTitle = document.querySelector('#calculator-title');
        if (calcTitle) {
            calcTitle.textContent = 'Online Estimate';
        }
        
        const calcSubtitle = document.querySelectorAll('.section-subtitle')[0];
        if (calcSubtitle) {
            calcSubtitle.textContent = 'Answer a few questions to get a personalized estimate';
        }
        
        // Steps labels
        const stepLabels = document.querySelectorAll('.step-label');
        if (stepLabels.length >= 4) {
            stepLabels[0].textContent = 'Service Type';
            stepLabels[1].textContent = 'Details & Options';
            stepLabels[2].textContent = 'Frequency';
            stepLabels[3].textContent = 'Your Information';
        }
        
        // ============================================
        // STEP 1: Service Type
        // ============================================
        const allH3 = document.querySelectorAll('h3');
        allH3.forEach(h3 => {
            if (h3.textContent.includes('Quel type de nettoyage')) {
                h3.textContent = 'What type of cleaning are you looking for?';
            }
        });
        
        // Service cards
        const serviceCards = document.querySelectorAll('.service-option-card');
        
        // Card 1: Bureaux
        if (serviceCards[0]) {
            const title = serviceCards[0].querySelector('h4');
            const desc = serviceCards[0].querySelector('p');
            if (title && title.textContent.includes('Bureaux')) {
                title.textContent = 'Offices & Commercial Premises';
            }
            if (desc && desc.textContent.includes('Nettoyage régulier')) {
                desc.textContent = 'Regular or one-time cleaning for businesses and retail';
            }
        }
        
        // Card 2: Résidentiel
        if (serviceCards[1]) {
            const title = serviceCards[1].querySelector('h4');
            const desc = serviceCards[1].querySelector('p');
            if (title && title.textContent.includes('Résidentiel')) {
                title.textContent = 'Residential & Condominiums';
            }
            if (desc && desc.textContent.includes('Appartements')) {
                desc.textContent = 'Apartments, houses, common areas of buildings';
            }
        }
        
        // Card 3: Spécialisé
        if (serviceCards[2]) {
            const title = serviceCards[2].querySelector('h4');
            const desc = serviceCards[2].querySelector('p');
            if (title && title.textContent.includes('Spécialisé')) {
                title.textContent = 'Specialized Cleaning';
            }
            if (desc && desc.textContent.includes('Tapis')) {
                desc.textContent = 'Carpets, rugs, windows, sofas, end of lease';
            }
        }
        
        // Card 4: Industriel
        if (serviceCards[3]) {
            const title = serviceCards[3].querySelector('h4');
            const desc = serviceCards[3].querySelector('p');
            if (title && title.textContent.includes('Industriel')) {
                title.textContent = 'Industrial & Post-Construction';
            }
            if (desc && desc.textContent.includes('Chantiers')) {
                desc.textContent = 'Construction sites, industrial premises, deep cleaning';
            }
        }
        
        // ============================================
        // STEP 2: Details & Options
        // ============================================
        allH3.forEach(h3 => {
            if (h3.textContent.includes('Plus de détails sur vos besoins')) {
                h3.textContent = 'More details about your needs';
            }
        });
        
        // Surface area label
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            const text = label.textContent;
            
            if (text.includes('Surface à nettoyer')) {
                label.innerHTML = 'Area to clean (m²) <span class="required">*</span>';
            }
            if (text.includes('Services spécifiques nécessaires')) {
                label.textContent = 'Specific services required';
            }
            if (text.includes('Nettoyage tapis/moquettes')) {
                label.textContent = 'Carpet/rug cleaning';
            }
            if (text.includes('Nettoyage de vitres')) {
                label.textContent = 'Window cleaning';
            }
            if (text.includes('Sanitaires & cuisines')) {
                label.textContent = 'Bathrooms & kitchens';
            }
            if (text.includes('Traitement des sols')) {
                label.textContent = 'Floor treatment';
            }
            if (text.includes('Désinfection spéciale')) {
                label.textContent = 'Special disinfection';
            }
            if (text.includes('Fourniture produits')) {
                label.textContent = 'Products included';
            }
            if (text.includes('Commentaires additionnels') || (text.includes('complémentaire') && text.includes('optionnel'))) {
                label.textContent = 'Additional comments (optional)';
            }
        });
        
        // Slider labels
        const sliderSpans = document.querySelectorAll('.slider-labels span');
        if (sliderSpans.length >= 3) {
            sliderSpans[0].textContent = 'Small area';
            // sliderSpans[1] is the dynamic value (100 m²)
            if (sliderSpans[2]) sliderSpans[2].textContent = 'Large area';
        }
        
        // Placeholder
        const specialNotes = document.querySelector('#special-notes');
        if (specialNotes) {
            specialNotes.setAttribute('placeholder', 'Describe any special needs or particularities...');
        }
        
        // ============================================
        // STEP 3: Frequency
        // ============================================
        allH3.forEach(h3 => {
            if (h3.textContent.includes('Fréquence du service')) {
                h3.textContent = 'Service frequency';
            }
        });
        
        // Frequency cards
        const freqCards = document.querySelectorAll('[data-step="3"] + .calculator-content .service-option-card, .frequency-option-card');
        
        // Try alternate selector if first doesn't work
        const allServiceCards = document.querySelectorAll('.service-option-card');
        let frequencyCards = [];
        let foundFrequency = false;
        
        allServiceCards.forEach((card, index) => {
            const h4 = card.querySelector('h4');
            if (h4 && (h4.textContent.includes('Ponctuel') || h4.textContent.includes('Hebdomadaire') || h4.textContent.includes('Mensuel') || h4.textContent.includes('Quotidien'))) {
                frequencyCards.push(card);
                foundFrequency = true;
            }
        });
        
        if (foundFrequency && frequencyCards.length >= 4) {
            // Card 1: Ponctuel
            const freq1Title = frequencyCards[0].querySelector('h4');
            const freq1Desc = frequencyCards[0].querySelector('p');
            if (freq1Title) freq1Title.textContent = 'One-time / Unique';
            if (freq1Desc) freq1Desc.textContent = 'Single or occasional cleaning';
            
            // Card 2: Hebdo
            const freq2Title = frequencyCards[1].querySelector('h4');
            const freq2Desc = frequencyCards[1].querySelector('p');
            if (freq2Title) freq2Title.textContent = 'Weekly';
            if (freq2Desc) freq2Desc.textContent = 'Regular cleaning every week';
            
            // Card 3: Mensuel
            const freq3Title = frequencyCards[2].querySelector('h4');
            const freq3Desc = frequencyCards[2].querySelector('p');
            if (freq3Title) freq3Title.textContent = 'Monthly';
            if (freq3Desc) freq3Desc.textContent = 'Monthly or bi-monthly maintenance';
            
            // Card 4: Quotidien
            const freq4Title = frequencyCards[3].querySelector('h4');
            const freq4Desc = frequencyCards[3].querySelector('p');
            if (freq4Title) freq4Title.textContent = 'Daily';
            if (freq4Desc) freq4Desc.textContent = 'Complete daily service';
        }
        
        // ============================================
        // STEP 4: Your Information
        // ============================================
        allH3.forEach(h3 => {
            if (h3.textContent.includes('Vos coordonnées')) {
                h3.textContent = 'Your contact details';
            }
        });
        
        // Estimation title
        const estimationTitle = document.querySelectorAll('h4, .estimation-title');
        estimationTitle.forEach(h4 => {
            if (h4.textContent.includes('Estimation indicative')) {
                h4.textContent = 'Indicative Estimate';
            }
        });
        
        // Estimation note
        const estimationNote = document.querySelector('.estimation-note');
        if (estimationNote) {
            estimationNote.textContent = '* Based on the information provided. Final price may vary after on-site assessment.';
        }
        
        // Form labels - more specific
        labels.forEach(label => {
            const text = label.textContent;
            const forAttr = label.getAttribute('for');
            
            if (forAttr === 'quote-name' || text.includes('Nom complet')) {
                label.innerHTML = 'Full name <span class="required">*</span>';
            }
            if (forAttr === 'quote-company' || (text.includes('Entreprise') && !text.includes('Devis'))) {
                label.textContent = 'Company (optional)';
            }
            if (forAttr === 'quote-email' || (text.includes('Email') && !text.includes('e-mail'))) {
                label.innerHTML = 'Email <span class="required">*</span>';
            }
            if (forAttr === 'quote-phone' || text.includes('Téléphone')) {
                label.innerHTML = 'Phone <span class="required">*</span>';
            }
            if (forAttr === 'quote-address' || text.includes('Adresse du chantier')) {
                label.innerHTML = 'Site address <span class="required">*</span>';
            }
            if (forAttr === 'quote-message' || (text.includes('Message') && !text.includes('complémentaire'))) {
                label.textContent = 'Additional message (optional)';
            }
            if (forAttr === 'quote-privacy' || text.includes('politique de confidentialité')) {
                label.innerHTML = 'I accept the <a href="../legal/confidentialite.html">privacy policy</a> and authorize the processing of my personal data <span class="required">*</span>';
            }
            if (forAttr === 'quote-newsletter' || text.includes('recevoir des offres')) {
                label.textContent = 'I want to receive exclusive offers and cleaning tips by email';
            }
        });
        
        // Placeholders
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const placeholder = input.getAttribute('placeholder');
            const id = input.getAttribute('id');
            
            if (id === 'quote-name' || placeholder?.includes('nom')) {
                input.setAttribute('placeholder', 'Your full name');
            }
            if (id === 'quote-company' || placeholder?.includes('entreprise')) {
                input.setAttribute('placeholder', 'Your company name');
            }
            if (id === 'quote-email' || placeholder?.includes('email')) {
                input.setAttribute('placeholder', 'your.email@example.com');
            }
            if (id === 'quote-phone' || placeholder?.includes('téléphone')) {
                input.setAttribute('placeholder', '+32 XXX XX XX XX');
            }
            if (id === 'quote-address' || placeholder?.includes('adresse')) {
                input.setAttribute('placeholder', 'Full address of the site');
            }
            if (id === 'quote-message' || placeholder?.includes('détails')) {
                input.setAttribute('placeholder', 'Any additional details...');
            }
        });
        
        // ============================================
        // NAVIGATION BUTTONS
        // ============================================
        const buttons = document.querySelectorAll('button, .btn');
        buttons.forEach(btn => {
            const text = btn.textContent.trim();
            
            if (text.includes('Précédent') || btn.classList.contains('prev-step')) {
                btn.innerHTML = '<i class="fas fa-arrow-left"></i> Previous';
            }
            if (text.includes('Suivant') && !text.includes('précédent') || btn.classList.contains('next-step')) {
                btn.innerHTML = '<i class="fas fa-arrow-right"></i> Next';
            }
            if (text.includes('Envoyer ma demande') || btn.getAttribute('id') === 'submitQuoteBtn') {
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send my request';
            }
        });
        
        // ============================================
        // CONTACT SECTION
        // ============================================
        const contactTitle = document.querySelector('#contact-title');
        if (contactTitle) {
            contactTitle.textContent = 'Contact Us Directly';
        }
        
        const sectionSubtitles = document.querySelectorAll('.section-subtitle');
        sectionSubtitles.forEach(subtitle => {
            if (subtitle.textContent.includes('Plusieurs façons de nous joindre')) {
                subtitle.textContent = 'Several ways to reach us for your quote requests';
            }
        });
        
        // Contact cards
        const contactCards = document.querySelectorAll('.contact-card');
        
        // Card 1: Phone
        if (contactCards[0]) {
            const h3s = contactCards[0].querySelectorAll('h3');
            const ps = contactCards[0].querySelectorAll('p');
            
            h3s.forEach(h3 => {
                if (h3.textContent.includes('Téléphone')) h3.textContent = 'Phone';
            });
            if (ps[0] && ps[0].textContent.includes('Appelez')) {
                ps[0].textContent = 'Call us for a quick quote';
            }
            if (ps[1] && ps[1].textContent.includes('Lundi')) {
                ps[1].textContent = 'Monday to Friday: 8:00 AM - 6:00 PM';
            }
        }
        
        // Card 2: Email
        if (contactCards[1]) {
            const h3s = contactCards[1].querySelectorAll('h3');
            const ps = contactCards[1].querySelectorAll('p');
            
            h3s.forEach(h3 => {
                if (h3.textContent === 'Email') h3.textContent = 'Email';
            });
            if (ps[0] && ps[0].textContent.includes('Envoyez')) {
                ps[0].textContent = 'Send us your details by email';
            }
            if (ps[1] && ps[1].textContent.includes('Réponse sous')) {
                ps[1].textContent = 'Response within 24 hours';
            }
        }
        
        // Card 3: Service Area
        if (contactCards[2]) {
            const h3s = contactCards[2].querySelectorAll('h3');
            const ps = contactCards[2].querySelectorAll('p');
            
            h3s.forEach(h3 => {
                if (h3.textContent.includes('Zone d\'intervention')) h3.textContent = 'Service Area';
            });
            if (ps[0] && ps[0].textContent.includes('Nous couvrons')) {
                ps[0].textContent = 'We cover the entire Brussels region';
            }
            if (ps[1] && ps[1].textContent.includes('Bruxelles')) {
                ps[1].textContent = 'Brussels and surroundings (up to 30 km radius)';
            }
        }
        
        // ============================================
        // FAQ SECTION
        // ============================================
        const faqTitle = document.querySelector('#faq-title');
        if (faqTitle) {
            faqTitle.textContent = 'Questions About Our Quotes';
        }
        
        sectionSubtitles.forEach(subtitle => {
            if (subtitle.textContent.includes('Tout ce que vous devez savoir')) {
                subtitle.textContent = 'Everything you need to know about our pricing and process';
            }
        });
        
        // FAQ questions
        const faqQuestions = document.querySelectorAll('.faq-question');
        const faqAnswers = document.querySelectorAll('.faq-answer p');
        
        // FAQ 1
        if (faqQuestions[0]) {
            const span = faqQuestions[0].querySelector('span');
            if (span && span.textContent.includes('Comment sont calculés')) {
                span.textContent = 'How are your prices calculated?';
            }
        }
        if (faqAnswers[0]) {
            faqAnswers[0].textContent = 'Our prices are calculated based on several criteria: area to clean, type of service, frequency, specific options selected. The online estimate gives you an immediate indication. For a detailed quote, we perform a free on-site assessment.';
        }
        
        // FAQ 2
        if (faqQuestions[1]) {
            const span = faqQuestions[1].querySelector('span');
            if (span && span.textContent.includes('estimation en ligne')) {
                span.textContent = 'Is the online estimate binding?';
            }
        }
        if (faqAnswers[1]) {
            faqAnswers[1].textContent = 'Absolutely. Our online estimate and the detailed quote we send you afterward are binding. The final price will not change unless you add services or modify the original scope.';
        }
        
        // FAQ 3
        if (faqQuestions[2]) {
            const span = faqQuestions[2].querySelector('span');
            if (span && span.textContent.includes('Combien de temps')) {
                span.textContent = 'How long does it take to receive a quote?';
            }
        }
        if (faqAnswers[2]) {
            faqAnswers[2].textContent = 'The online estimate is immediate. For a detailed personalized quote, we commit to responding within 24 hours maximum. For urgent requests, call us directly.';
        }
        
        // FAQ 4
        if (faqQuestions[3]) {
            const span = faqQuestions[3].querySelector('span');
            if (span && span.textContent.includes('contrats')) {
                span.textContent = 'Do you offer contracts or subscriptions?';
            }
        }
        if (faqAnswers[3]) {
            faqAnswers[3].textContent = 'Yes, we offer monthly, quarterly, and annual packages with advantageous rates. The more frequent the service, the more competitive the unit price becomes.';
        }
        
        // FAQ 5
        if (faqQuestions[4]) {
            const span = faqQuestions[4].querySelector('span');
            if (span && span.textContent.includes('moyens de paiement')) {
                span.textContent = 'What payment methods do you accept?';
            }
        }
        if (faqAnswers[4]) {
            faqAnswers[4].textContent = 'We accept bank transfers, credit/debit cards, PayPal, and for companies, payment by invoice with payment terms.';
        }
        
        // ============================================
        // CTA SECTION
        // ============================================
        const ctaTitle = document.querySelector('#cta-title');
        if (ctaTitle) {
            ctaTitle.textContent = 'Need an Urgent Quote?';
        }
        
        const ctaP = document.querySelectorAll('#cta-title + p')[0];
        if (ctaP && ctaP.textContent.includes('Contactez-nous directement')) {
            ctaP.textContent = 'Contact us directly by phone for an immediate estimate and quick start of your cleaning services. Our team is available Monday to Friday, 8 AM to 6 PM.';
        }
        
        // Trust badges
        const trustBadges = document.querySelectorAll('.trust-item span, .trust-badge span');
        trustBadges.forEach(badge => {
            const text = badge.textContent.trim();
            if (text.includes('Devis gratuit')) badge.textContent = 'Free quote';
            if (text.includes('Réponse sous 24h')) badge.textContent = 'Response within 24h';
            if (text.includes('Sans engagement')) badge.textContent = 'No commitment';
            if (text.includes('Prix transparents')) badge.textContent = 'Transparent prices';
        });
        
        console.log('✅ Complete English translation applied successfully (contact)');
        
    } catch (error) {
        console.error('❌ Error applying English translation (contact):', error);
    }
}

// Export for use
window.applyTranslations = translateContactToEnglish;

// Auto-execute if page is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', translateContactToEnglish);
} else {
    // Give a small delay to ensure DOM is fully ready
    setTimeout(translateContactToEnglish, 100);
}
