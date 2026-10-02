// Variable globale simple pour stocker l'état de la grille (clé: "x,y", valeur: nombre)
grille_memoire = {}

function initialiser_application() {
    initialisation_du_graphique()

    inserer_carre_dom([0, 0], 1)
    inserer_carre_dom([1, 0], 2)
    inserer_carre_dom([0, 1], 3)
}

initialiser_application()


function est_case_libre(coordonnees) {
    cle = coordonnees[0] + ',' + coordonnees[1]
    return grille_memoire[cle] === undefined
}

if (est_case_libre([1,0])){
    console.log('5')
}
else{
    console.log('non')
}

console.log(grille_memoire)