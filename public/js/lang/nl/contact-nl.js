// contact-nl.js - Complete Dutch translation for Contact page

function translateContactToDutch() {
    console.log('🌍 Vertalen Contact pagina naar Nederlands - VOLLEDIGE VERTALING...');
    
    try {
        // ============================================
        // META & TITLE
        // ============================================
        document.title = 'Gratis Offerte - Morais Cleaning - Professionele Schoonmaak Brussel';
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Vraag uw gratis offerte aan voor alle professionele schoonmaakdiensten in Brussel. Transparant, snel en aangepast aan uw specifieke behoeften.');
        }
        
        // ============================================
        // HERO SECTION
        // ============================================
        const heroBadge = document.querySelector('.hero-badge span');
        if (heroBadge) {
            heroBadge.textContent = 'GRATIS OFFERTE - GEEN VERPLICHTING';
        }
        
        const heroTitle = document.querySelector('#hero-title, .hero-title');
        if (heroTitle) {
            heroTitle.textContent = 'Ontvang Uw Gepersonaliseerde Offerte';
        }
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = 'Vraag uw gratis schatting aan voor alle professionele schoonmaakdiensten in Brussel. Transparant, snel en aangepast aan uw specifieke behoeften.';
        }
        
        // Hero features (4 cards)
        const heroFeatures = document.querySelectorAll('.hero-feature span');
        if (heroFeatures.length >= 4) {
            heroFeatures[0].textContent = 'Antwoord binnen 24 uur max';
            heroFeatures[1].textContent = 'Gratis offerte zonder verplichting';
            heroFeatures[2].textContent = 'Transparante prijzen, geen verrassingen';
            heroFeatures[3].textContent = 'Snelle start mogelijk';
        }
        
        // Hero CTA
        const heroCTA = document.querySelectorAll('.hero-content .btn, .btn-accent');
        heroCTA.forEach(btn => {
            if (btn.textContent.includes('Commencer') || btn.textContent.includes('estimation')) {
                btn.innerHTML = '<i class="fas fa-calculator"></i> Begin de schatting';
            }
        });
        
        // ============================================
        // CALCULATOR SECTION
        // ============================================
        const calcTitle = document.querySelector('#calculator-title');
        if (calcTitle) {
            calcTitle.textContent = 'Online Schatting';
        }
        
        const calcSubtitle = document.querySelectorAll('.section-subtitle')[0];
        if (calcSubtitle) {
            calcSubtitle.textContent = 'Beantwoord enkele vragen om een gepersonaliseerde schatting te krijgen';
        }
        
        // Steps labels
        const stepLabels = document.querySelectorAll('.step-label');
        if (stepLabels.length >= 4) {
            stepLabels[0].textContent = 'Type Dienst';
            stepLabels[1].textContent = 'Details & Opties';
            stepLabels[2].textContent = 'Frequentie';
            stepLabels[3].textContent = 'Uw Gegevens';
        }
        
        // ============================================
        // STEP 1: Service Type
        // ============================================
        const allH3 = document.querySelectorAll('h3');
        allH3.forEach(h3 => {
            if (h3.textContent.includes('Quel type de nettoyage')) {
                h3.textContent = 'Welk type schoonmaak zoekt u?';
            }
        });
        
        // Service cards
        const serviceCards = document.querySelectorAll('.service-option-card');
        
        // Card 1: Bureaux
        if (serviceCards[0]) {
            const title = serviceCards[0].querySelector('h4');
            const desc = serviceCards[0].querySelector('p');
            if (title && title.textContent.includes('Bureaux')) {
                title.textContent = 'Kantoren & Commerciële Ruimtes';
            }
            if (desc && desc.textContent.includes('Nettoyage régulier')) {
                desc.textContent = 'Regelmatige of eenmalige schoonmaak voor bedrijven en winkels';
            }
        }
        
        // Card 2: Résidentiel
        if (serviceCards[1]) {
            const title = serviceCards[1].querySelector('h4');
            const desc = serviceCards[1].querySelector('p');
            if (title && title.textContent.includes('Résidentiel')) {
                title.textContent = 'Residentieel & Appartementen';
            }
            if (desc && desc.textContent.includes('Appartements')) {
                desc.textContent = 'Appartementen, huizen, gemeenschappelijke ruimtes van gebouwen';
            }
        }
        
        // Card 3: Spécialisé
        if (serviceCards[2]) {
            const title = serviceCards[2].querySelector('h4');
            const desc = serviceCards[2].querySelector('p');
            if (title && title.textContent.includes('Spécialisé')) {
                title.textContent = 'Gespecialiseerde Schoonmaak';
            }
            if (desc && desc.textContent.includes('Tapis')) {
                desc.textContent = 'Tapijten, vloerbedekking, ramen, banken, einde huur';
            }
        }
        
        // Card 4: Industriel
        if (serviceCards[3]) {
            const title = serviceCards[3].querySelector('h4');
            const desc = serviceCards[3].querySelector('p');
            if (title && title.textContent.includes('Industriel')) {
                title.textContent = 'Industrieel & Na Werken';
            }
            if (desc && desc.textContent.includes('Chantiers')) {
                desc.textContent = 'Bouwplaatsen, industriële lokalen, grondige schoonmaak';
            }
        }
        
        // ============================================
        // STEP 2: Details & Options
        // ============================================
        allH3.forEach(h3 => {
            if (h3.textContent.includes('Plus de détails sur vos besoins')) {
                h3.textContent = 'Meer details over uw behoeften';
            }
        });
        
        // Surface area label
        const labels = document.querySelectorAll('label');
        labels.forEach(label => {
            const text = label.textContent;
            
            if (text.includes('Surface à nettoyer')) {
                label.innerHTML = 'Te reinigen oppervlakte (m²) <span class="required">*</span>';
            }
            if (text.includes('Services spécifiques nécessaires')) {
                label.textContent = 'Specifieke benodigde diensten';
            }
            if (text.includes('Nettoyage tapis/moquettes')) {
                label.textContent = 'Tapijt-/vloerbedekkingreiniging';
            }
            if (text.includes('Nettoyage de vitres')) {
                label.textContent = 'Ramen schoonmaken';
            }
            if (text.includes('Sanitaires & cuisines')) {
                label.textContent = 'Badkamers & keukens';
            }
            if (text.includes('Traitement des sols')) {
                label.textContent = 'Vloerbehandeling';
            }
            if (text.includes('Désinfection spéciale')) {
                label.textContent = 'Speciale desinfectie';
            }
            if (text.includes('Fourniture produits')) {
                label.textContent = 'Producten inbegrepen';
            }
            if (text.includes('Commentaires additionnels') || (text.includes('complémentaire') && text.includes('optionnel'))) {
                label.textContent = 'Aanvullende opmerkingen (optioneel)';
            }
        });
        
        // Slider labels
        const sliderSpans = document.querySelectorAll('.slider-labels span');
        if (sliderSpans.length >= 3) {
            sliderSpans[0].textContent = 'Klein oppervlak';
            // sliderSpans[1] is the dynamic value (100 m²)
            if (sliderSpans[2]) sliderSpans[2].textContent = 'Groot oppervlak';
        }
        
        // Placeholder
        const specialNotes = document.querySelector('#special-notes');
        if (specialNotes) {
            specialNotes.setAttribute('placeholder', 'Beschrijf eventuele bijzondere behoeften of kenmerken...');
        }
        
        // ============================================
        // STEP 3: Frequency
        // ============================================
        allH3.forEach(h3 => {
            if (h3.textContent.includes('Fréquence du service')) {
                h3.textContent = 'Frequentie van de dienst';
            }
        });
        
        // Frequency cards
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
            if (freq1Title) freq1Title.textContent = 'Eenmalig / Uniek';
            if (freq1Desc) freq1Desc.textContent = 'Eenmalige of incidentele schoonmaak';
            
            // Card 2: Hebdo
            const freq2Title = frequencyCards[1].querySelector('h4');
            const freq2Desc = frequencyCards[1].querySelector('p');
            if (freq2Title) freq2Title.textContent = 'Wekelijks';
            if (freq2Desc) freq2Desc.textContent = 'Regelmatige schoonmaak elke week';
            
            // Card 3: Mensuel
            const freq3Title = frequencyCards[2].querySelector('h4');
            const freq3Desc = frequencyCards[2].querySelector('p');
            if (freq3Title) freq3Title.textContent = 'Maandelijks';
            if (freq3Desc) freq3Desc.textContent = 'Maandelijks of tweemaandelijks onderhoud';
            
            // Card 4: Quotidien
            const freq4Title = frequencyCards[3].querySelector('h4');
            const freq4Desc = frequencyCards[3].querySelector('p');
            if (freq4Title) freq4Title.textContent = 'Dagelijks';
            if (freq4Desc) freq4Desc.textContent = 'Volledige dagelijkse dienst';
        }
        
        // ============================================
        // STEP 4: Your Information
        // ============================================
        allH3.forEach(h3 => {
            if (h3.textContent.includes('Vos coordonnées')) {
                h3.textContent = 'Uw contactgegevens';
            }
        });
        
        // Estimation title
        const estimationTitle = document.querySelectorAll('h4, .estimation-title');
        estimationTitle.forEach(h4 => {
            if (h4.textContent.includes('Estimation indicative')) {
                h4.textContent = 'Indicatieve Schatting';
            }
        });
        
        // Estimation note
        const estimationNote = document.querySelector('.estimation-note');
        if (estimationNote) {
            estimationNote.textContent = '* Gebaseerd op de verstrekte informatie. De definitieve prijs kan variëren na ter plaatse beoordeling.';
        }
        
        // Form labels - more specific
        labels.forEach(label => {
            const text = label.textContent;
            const forAttr = label.getAttribute('for');
            
            if (forAttr === 'quote-name' || text.includes('Nom complet')) {
                label.innerHTML = 'Volledige naam <span class="required">*</span>';
            }
            if (forAttr === 'quote-company' || (text.includes('Entreprise') && !text.includes('Devis'))) {
                label.textContent = 'Bedrijf (optioneel)';
            }
            if (forAttr === 'quote-email' || (text.includes('Email') && !text.includes('e-mail'))) {
                label.innerHTML = 'E-mail <span class="required">*</span>';
            }
            if (forAttr === 'quote-phone' || text.includes('Téléphone')) {
                label.innerHTML = 'Telefoon <span class="required">*</span>';
            }
            if (forAttr === 'quote-address' || text.includes('Adresse du chantier')) {
                label.innerHTML = 'Adres van de locatie <span class="required">*</span>';
            }
            if (forAttr === 'quote-message' || (text.includes('Message') && !text.includes('complémentaire'))) {
                label.textContent = 'Aanvullend bericht (optioneel)';
            }
            if (forAttr === 'quote-privacy' || text.includes('politique de confidentialité')) {
                label.innerHTML = 'Ik accepteer het <a href="../legal/confidentialite.html">privacybeleid</a> en machtig de verwerking van mijn persoonlijke gegevens <span class="required">*</span>';
            }
            if (forAttr === 'quote-newsletter' || text.includes('recevoir des offres')) {
                label.textContent = 'Ik wil exclusieve aanbiedingen en schoonmaaktips per e-mail ontvangen';
            }
        });
        
        // Placeholders
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const placeholder = input.getAttribute('placeholder');
            const id = input.getAttribute('id');
            
            if (id === 'quote-name' || placeholder?.includes('nom')) {
                input.setAttribute('placeholder', 'Uw volledige naam');
            }
            if (id === 'quote-company' || placeholder?.includes('entreprise')) {
                input.setAttribute('placeholder', 'Uw bedrijfsnaam');
            }
            if (id === 'quote-email' || placeholder?.includes('email')) {
                input.setAttribute('placeholder', 'uw.email@voorbeeld.be');
            }
            if (id === 'quote-phone' || placeholder?.includes('téléphone')) {
                input.setAttribute('placeholder', '+32 XXX XX XX XX');
            }
            if (id === 'quote-address' || placeholder?.includes('adresse')) {
                input.setAttribute('placeholder', 'Volledig adres van de locatie');
            }
            if (id === 'quote-message' || placeholder?.includes('détails')) {
                input.setAttribute('placeholder', 'Eventuele aanvullende details...');
            }
        });
        
        // ============================================
        // NAVIGATION BUTTONS
        // ============================================
        const buttons = document.querySelectorAll('button, .btn');
        buttons.forEach(btn => {
            const text = btn.textContent.trim();
            
            if (text.includes('Précédent') || btn.classList.contains('prev-step')) {
                btn.innerHTML = '<i class="fas fa-arrow-left"></i> Vorige';
            }
            if (text.includes('Suivant') && !text.includes('précédent') || btn.classList.contains('next-step')) {
                btn.innerHTML = '<i class="fas fa-arrow-right"></i> Volgende';
            }
            if (text.includes('Envoyer ma demande') || btn.getAttribute('id') === 'submitQuoteBtn') {
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> Verstuur mijn aanvraag';
            }
        });
        
        // ============================================
        // CONTACT SECTION
        // ============================================
        const contactTitle = document.querySelector('#contact-title');
        if (contactTitle) {
            contactTitle.textContent = 'Neem Rechtstreeks Contact Op';
        }
        
        const sectionSubtitles = document.querySelectorAll('.section-subtitle');
        sectionSubtitles.forEach(subtitle => {
            if (subtitle.textContent.includes('Plusieurs façons de nous joindre')) {
                subtitle.textContent = 'Verschillende manieren om ons te bereiken voor uw offerteaanvragen';
            }
        });
        
        // Contact cards
        const contactCards = document.querySelectorAll('.contact-card');
        
        // Card 1: Phone
        if (contactCards[0]) {
            const h3s = contactCards[0].querySelectorAll('h3');
            const ps = contactCards[0].querySelectorAll('p');
            
            h3s.forEach(h3 => {
                if (h3.textContent.includes('Téléphone')) h3.textContent = 'Telefoon';
            });
            if (ps[0] && ps[0].textContent.includes('Appelez')) {
                ps[0].textContent = 'Bel ons voor een snelle offerte';
            }
            if (ps[1] && ps[1].textContent.includes('Lundi')) {
                ps[1].textContent = 'Maandag tot vrijdag: 08:00 - 18:00';
            }
        }
        
        // Card 2: Email
        if (contactCards[1]) {
            const h3s = contactCards[1].querySelectorAll('h3');
            const ps = contactCards[1].querySelectorAll('p');
            
            h3s.forEach(h3 => {
                if (h3.textContent === 'Email') h3.textContent = 'E-mail';
            });
            if (ps[0] && ps[0].textContent.includes('Envoyez')) {
                ps[0].textContent = 'Stuur ons uw gegevens per e-mail';
            }
            if (ps[1] && ps[1].textContent.includes('Réponse sous')) {
                ps[1].textContent = 'Antwoord binnen 24 uur';
            }
        }
        
        // Card 3: Service Area
        if (contactCards[2]) {
            const h3s = contactCards[2].querySelectorAll('h3');
            const ps = contactCards[2].querySelectorAll('p');
            
            h3s.forEach(h3 => {
                if (h3.textContent.includes('Zone d\'intervention')) h3.textContent = 'Servicezone';
            });
            if (ps[0] && ps[0].textContent.includes('Nous couvrons')) {
                ps[0].textContent = 'We dekken de hele regio Brussel';
            }
            if (ps[1] && ps[1].textContent.includes('Bruxelles')) {
                ps[1].textContent = 'Brussel en omgeving (tot 30 km straal)';
            }
        }
        
        // ============================================
        // FAQ SECTION
        // ============================================
        const faqTitle = document.querySelector('#faq-title');
        if (faqTitle) {
            faqTitle.textContent = 'Vragen Over Onze Offertes';
        }
        
        sectionSubtitles.forEach(subtitle => {
            if (subtitle.textContent.includes('Tout ce que vous devez savoir')) {
                subtitle.textContent = 'Alles wat u moet weten over onze prijzen en proces';
            }
        });
        
        // FAQ questions
        const faqQuestions = document.querySelectorAll('.faq-question');
        const faqAnswers = document.querySelectorAll('.faq-answer p');
        
        // FAQ 1
        if (faqQuestions[0]) {
            const span = faqQuestions[0].querySelector('span');
            if (span && span.textContent.includes('Comment sont calculés')) {
                span.textContent = 'Hoe worden uw prijzen berekend?';
            }
        }
        if (faqAnswers[0]) {
            faqAnswers[0].textContent = 'Onze prijzen worden berekend op basis van verschillende criteria: te reinigen oppervlakte, type dienst, frequentie, geselecteerde specifieke opties. De online schatting geeft u een onmiddellijke indicatie. Voor een gedetailleerde offerte voeren we een gratis ter plaatse beoordeling uit.';
        }
        
        // FAQ 2
        if (faqQuestions[1]) {
            const span = faqQuestions[1].querySelector('span');
            if (span && span.textContent.includes('estimation en ligne')) {
                span.textContent = 'Is de online schatting bindend?';
            }
        }
        if (faqAnswers[1]) {
            faqAnswers[1].textContent = 'Absoluut. Onze online schatting en de gedetailleerde offerte die we u daarna sturen zijn bindend. De definitieve prijs zal niet veranderen, tenzij u diensten toevoegt of de oorspronkelijke reikwijdte wijzigt.';
        }
        
        // FAQ 3
        if (faqQuestions[2]) {
            const span = faqQuestions[2].querySelector('span');
            if (span && span.textContent.includes('Combien de temps')) {
                span.textContent = 'Hoe lang duurt het om een offerte te ontvangen?';
            }
        }
        if (faqAnswers[2]) {
            faqAnswers[2].textContent = 'De online schatting is onmiddellijk. Voor een gedetailleerde gepersonaliseerde offerte verbinden we ons ertoe binnen maximaal 24 uur te antwoorden. Voor dringende aanvragen, bel ons rechtstreeks.';
        }
        
        // FAQ 4
        if (faqQuestions[3]) {
            const span = faqQuestions[3].querySelector('span');
            if (span && span.textContent.includes('contrats')) {
                span.textContent = 'Biedt u contracten of abonnementen aan?';
            }
        }
        if (faqAnswers[3]) {
            faqAnswers[3].textContent = 'Ja, we bieden maandelijkse, driemaandelijkse en jaarlijkse pakketten aan met voordelige tarieven. Hoe frequenter de dienst, hoe competitiever de eenheidsprijs wordt.';
        }
        
        // FAQ 5
        if (faqQuestions[4]) {
            const span = faqQuestions[4].querySelector('span');
            if (span && span.textContent.includes('moyens de paiement')) {
                span.textContent = 'Welke betaalmethoden accepteert u?';
            }
        }
        if (faqAnswers[4]) {
            faqAnswers[4].textContent = 'We accepteren bankoverschrijvingen, credit-/debitcards, PayPal, en voor bedrijven, betaling per factuur met betalingstermijnen.';
        }
        
        // ============================================
        // CTA SECTION
        // ============================================
        const ctaTitle = document.querySelector('#cta-title');
        if (ctaTitle) {
            ctaTitle.textContent = 'Spoedeisende Offerte Nodig?';
        }
        
        const ctaP = document.querySelectorAll('#cta-title + p')[0];
        if (ctaP && ctaP.textContent.includes('Contactez-nous directement')) {
            ctaP.textContent = 'Neem rechtstreeks telefonisch contact met ons op voor een onmiddellijke schatting en snelle start van uw schoonmaakdiensten. Ons team is beschikbaar van maandag tot vrijdag, 08:00 tot 18:00.';
        }
        
        // Trust badges
        const trustBadges = document.querySelectorAll('.trust-item span, .trust-badge span');
        trustBadges.forEach(badge => {
            const text = badge.textContent.trim();
            if (text.includes('Devis gratuit')) badge.textContent = 'Gratis offerte';
            if (text.includes('Réponse sous 24h')) badge.textContent = 'Antwoord binnen 24u';
            if (text.includes('Sans engagement')) badge.textContent = 'Geen verplichting';
            if (text.includes('Prix transparents')) badge.textContent = 'Transparante prijzen';
        });
        
        console.log('✅ Volledige Nederlandse vertaling succesvol toegepast (contact)');
        
    } catch (error) {
        console.error('❌ Fout bij toepassen Nederlandse vertaling (contact):', error);
    }
}

// Export for use
window.applyTranslations = translateContactToDutch;

// Auto-execute if page is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', translateContactToDutch);
} else {
    // Give a small delay to ensure DOM is fully ready
    setTimeout(translateContactToDutch, 100);
}
