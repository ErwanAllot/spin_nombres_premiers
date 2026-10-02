// main.js

function initialiser_application() {
    conteneur = document.getElementById('grille_spin')
    
    // Nettoyage initial du conteneur si besoin
    

    // Positions initiales injectées une par une dans le DOM
    inserer_carre_dom([0, 0], 1)
    inserer_carre_dom([1, 0], 2)
}

initialiser_application()