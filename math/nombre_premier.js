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


function initier_un_tableau_des_premiers_nombres_premiers(quantite) {
    nombre_premier_de_rang_ = []
    for (let nombre_courant = 2; nombre_premier_de_rang_.length < quantite; nombre_courant++) {
        if (est_premier(nombre_courant)) {
            nombre_premier_de_rang_.push(nombre_courant)
        }
    }
    return nombre_premier_de_rang_
}