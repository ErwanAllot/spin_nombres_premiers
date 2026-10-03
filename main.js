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


function obtenir_vecteur_entre_nombres(nombre_depart, nombre_arrivee) {
    coord_depart = positions_par_nombre[nombre_depart]
    coord_arrivee = positions_par_nombre[nombre_arrivee]
    
    // On calcule le décalage (x_2 - x_1, y_2 - y_1)
    return [
        coord_arrivee[0] - coord_depart[0],
        coord_arrivee[1] - coord_depart[1]
    ]
}


nombre_depart = nombre_premier_de_rang_[0]
nombre_arrivee = nombre_premier_de_rang_[1]
console.log(nombre_depart)
console.log(nombre_arrivee)

mouvement = obtenir_vecteur_entre_nombres(nombre_depart, nombre_arrivee)
console.log('mouvement :' + mouvement)


rose_des_vents = {
    "nord": [0, 1],
    "nord_est": [1, 1],
    "est": [1, 0],
    "sud_est": [1, -1],
    "sud": [0, -1],
    "sud_ouest": [-1, -1],
    "ouest": [-1, 0],
    "nord_ouest": [-1, 1]
}



function obtenir_nom_vent(mouvement) {
    for (nom_vent in rose_des_vents) {
        vecteur = rose_des_vents[nom_vent]
        if (vecteur[0] === mouvement[0] && vecteur[1] === mouvement[1]) {
            return nom_vent
        }
    }
    return null
}

// 1. On récupère le mouvement entre 2 et 3
mouvement = obtenir_vecteur_entre_nombres(2, 3) // Donne [-1, 1]

// 2. On interroge notre dictionnaire pour avoir le nom du vent
vent = obtenir_nom_vent(mouvement) 

console.log(vent) // Affiche "nord_ouest" !




etats_spin = {}

// Quand tu trouves le placement pour 5 :
etats_spin[5] = {
    "coordonnees": [x, y],
    "vent_actuel": "nord_ouest",
    "options_restantes": ["sud_ouest", "ouest", "nord_ouest"],
    "option_choisie_index": 0
}

