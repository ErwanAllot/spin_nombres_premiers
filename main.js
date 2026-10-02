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