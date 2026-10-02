// graphique/dom_rendu.js

function inserer_carre_dom(conteneur, coordonnees, nombre) {
    const element_carre = document.createElement('div')
    element_carre.id = 'carre_' + nombre
    element_carre.className = est_premier(nombre) ? 'carre_premier' : 'carre_normal'
    element_carre.textContent = nombre

    // Positionnement CSS dynamique en fonction des coordonnées (x, y)
    // On centre par rapport au conteneur
    const taille_pixel = 50
    const decalage_x = 400 // Centre approximatif du conteneur
    const decalage_y = 400

    element_carre.style.position = 'absolute'
    element_carre.style.left = (decalage_x + (coordonnees[0] * taille_pixel)) + 'px'
    element_carre.style.bottom = (decalage_y + (coordonnees[1] * taille_pixel)) + 'px'
    element_carre.style.width = taille_pixel + 'px'
    element_carre.style.height = taille_pixel + 'px'

    conteneur.appendChild(element_carre)
}

function supprimer_carre_dom(conteneur, nombre) {
    const element_a_supprimer = document.getElementById('carre_' + nombre)
    if (element_a_supprimer) {
        conteneur.removeChild(element_a_supprimer)
    }
}