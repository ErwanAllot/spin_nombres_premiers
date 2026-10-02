function est_premier(nombre) {
    if (nombre < 2) {
        return false
    }
    for (let x = 2; x * x <= nombre; x++) {
        if (nombre % x === 0) {
            return false
        }
    }
    return true
}

function dessiner_carre(contexte, decalage_x, decalage_y, taille_carre, coordonnees_x, coordonnees_y, nombre) {
    // Inversion de l'axe y pour que les y positifs soient vers le haut
    const pixel_x = decalage_x + (coordonnees_x * taille_carre)
    const pixel_y = decalage_y - (coordonnees_y * taille_carre)

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

function initialiser_application() {
    const canvas = document.getElementById('grille_spin')
    const contexte = canvas.getContext('2d')
    
    contexte.clearRect(0, 0, canvas.width, canvas.height)

    const taille_carre = 50
    const decalage_x = canvas.width / 2
    const decalage_y = canvas.height / 2

    // Positions initiales données :
    // 1 en (0, 0)
    // 2 en (1, 0)
    dessiner_carre(contexte, decalage_x, decalage_y, taille_carre, 0, 0, 1)
    dessiner_carre(contexte, decalage_x, decalage_y, taille_carre, 1, 0, 2)
}

initialiser_application()