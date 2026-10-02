// main.js

function initialiser_application() {
    const conteneur = document.getElementById('grille_spin')
    
    // Nettoyage initial du conteneur si besoin
    conteneur.innerHTML = ''

    // Positions initiales injectées une par une dans le DOM
    inserer_carre_dom(conteneur, [0, 0], 1)
    inserer_carre_dom(conteneur, [1, 0], 2)
}

initialiser_application()