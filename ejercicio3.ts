// Función para obtener el numero mayor
function obtenerMayor(numeros: Array<number>) : number {
    let mayor = -Infinity
    numeros.forEach((numero) => {
        if (numero > mayor){
            mayor = numero
        }
    })
    return mayor
}

// Prueba de la función
const numeros = [1, 5, 2, 8, 34]
const numeros2 = [-3, -4, -9, -2, -1]
const numeros3 = [26, 14, 94, 85, 43]

console.log("El numero mayor entre 1,5,2,8 y 34 es " + obtenerMayor(numeros))
console.log("El numero mayor entre -3,-4,-9,-2 y -1 es " + obtenerMayor(numeros2))
console.log("El numero mayor entre 26,14,94,85 y 43 es " + obtenerMayor(numeros3))