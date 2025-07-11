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
    if (devisForm) {
        devisForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const route = document.getElementById('route').value;
            const poids = parseFloat(document.getElementById('poids').value);
            let prix = 0;
            if (route === 'france') {
                prix = poids * 10000;
            } else if (route === 'chine') {
                prix = poids * 12000;
            }
            resultatDevis.textContent = `Prix total : ${prix.toLocaleString()} FCFA`;
        });
    }
});
