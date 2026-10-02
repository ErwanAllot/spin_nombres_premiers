function dessiner_carre(coordonnees_x, coordonnees_y, nombre) {
    // Inversion de l'axe y pour que les y positifs soient vers le haut
    pixel_x = decalage_x + (coordonnees_x * taille_carre)
    pixel_y = decalage_y - (coordonnees_y * taille_carre)

    if (est_premier(nombre)) {
        contexte.fillStyle = '#e74c3c' // Rouge pour les nombres premiers
    } else {
        contexte.fillStyle = '#3498db' // Bleu pour les autres entiers
    }

    contexte.fillRect(pixel_x, pixel_y, taille_carre, taille_carre)
    contexte.strokeStyle = '#2c3e50'
    contexte.strokeRect(pixel_x, pixel_y, taille_carre, taille_carre)

    contexte.fillStyle = '#ffffff'
    contexte.font = '14px sans-serif'
    contexte.textAlign = 'center'
    contexte.textBaseline = 'middle'
    contexte.fillText(nombre, pixel_x + (taille_carre / 2), pixel_y + (taille_carre / 2))
}