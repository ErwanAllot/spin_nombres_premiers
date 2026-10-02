// Deux objets globaux simples
grille_memoire = {}       // clé: "x,y" -> valeur: nombre
positions_par_nombre = {} // clé: nombre -> valeur: [x, y]

initier_un_tableau_des_premiers_nombres_premiers(100)

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

console.log(nombre_premier_de_rang_[0])
console.log(nombre_premier_de_rang_[1])
console.log(nombre_premier_de_rang_[2])

console.log(positions_par_nombre[2])


