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