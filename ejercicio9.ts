// Creamos un arbol de caracteres utilizando un numero como altura
function imprimirArbol(n: number){
    let base : string = "***"
    let espacios : number
    let estrellas : number
    n = Math.round(n)
    for (let index = 0; index < n; index++) {
        estrellas = (index * 2) + 1
        espacios = n - index
        console.log(" ".repeat(espacios) + "*".repeat(estrellas) + " ".repeat(espacios))
    }
    console.log(" ".repeat(n - 1) + base + " ".repeat(n - 1))
}

// Probamos la función
imprimirArbol(10)