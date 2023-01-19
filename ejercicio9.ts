function imprimirArbol(n: number){
    let espacios : number
    let estrellas : number
    n = Math.round(n)
    for (let index = 0; index < n; index++) {
        estrellas = index
        espacios = n - index
        console.log(" ".repeat(espacios) + "*".repeat((estrellas * 2) + 1))
    }
}
imprimirArbol(10)