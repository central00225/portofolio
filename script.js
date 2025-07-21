document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message !');
            form.reset();
        });
    }

    // Calcul automatique du devis
    const devisForm = document.getElementById('devis-form');
    const resultatDevis = document.getElementById('resultat-devis');
    const devisBtn = devisForm ? devisForm.querySelector('button[type="submit"]') : null;
    const poidsInput = devisForm ? devisForm.querySelector('#poids') : null;
    if (devisForm && devisBtn && poidsInput) {
        poidsInput.addEventListener('input', function() {
            if (poidsInput.value && parseFloat(poidsInput.value) > 0) {
                devisBtn.classList.add('enabled');
                devisBtn.disabled = false;
            } else {
                devisBtn.classList.remove('enabled');
                devisBtn.disabled = true;
            }
        });
        devisBtn.disabled = true;
        devisBtn.classList.remove('enabled');
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const route = document.getElementById('route').value;
            let poids = parseFloat(document.getElementById('poids').value);
            if (isNaN(poids) || poids < 1) poids = 1;
            let prix = 0;
            if (route === 'france') {
                prix = poids * 10000;
            } else if (route === 'chine') {
                prix = poids * 12000;
            }
            resultatDevis.textContent = `Prix total : ${prix.toLocaleString()} FCFA`;
        });
    }

    // Calcul automatique du devis sur la page À propos
    const devisFormAbout = document.getElementById('devis-form-about');
    const resultatDevisAbout = document.getElementById('resultat-devis-about');
    const devisBtnAbout = devisFormAbout ? devisFormAbout.querySelector('button[type="submit"]') : null;
    const poidsInputAbout = devisFormAbout ? devisFormAbout.querySelector('#poids-about') : null;
    if (devisFormAbout && devisBtnAbout && poidsInputAbout) {
        poidsInputAbout.addEventListener('input', function() {
            if (poidsInputAbout.value && parseFloat(poidsInputAbout.value) > 0) {
                devisBtnAbout.classList.add('enabled');
                devisBtnAbout.disabled = false;
            } else {
                devisBtnAbout.classList.remove('enabled');
                devisBtnAbout.disabled = true;
            }
        });
        devisBtnAbout.disabled = true;
        devisBtnAbout.classList.remove('enabled');
        devisFormAbout.addEventListener('submit', function(e) {
            e.preventDefault();
            const route = document.getElementById('route-about').value;
            let poids = parseFloat(document.getElementById('poids-about').value);
            if (isNaN(poids) || poids < 1) poids = 1;
            let prix = 0;
            if (route === 'france') {
                prix = poids * 10000;
            } else if (route === 'chine') {
                prix = poids * 12000;
            }
            resultatDevisAbout.textContent = `Prix total : ${prix.toLocaleString()} FCFA`;
        });
    }

    // Animation fade-in au scroll pour toutes les sections
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.fade-in-scroll').forEach(function(el) {
            var rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    });
    window.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.fade-in-scroll').forEach(function(el) {
            var rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    });
});
