// Función para obtener el promedio
function promedio(numeros: Array<number>) : number {
    var total = 0
    numeros.forEach((numero) => {
        total = total + numero
    });
    return total / numeros.length
}

// Función para saber si un promedio dado es mayor, menor o igual al siguiente numero dado
function compararPromedio(promedio:number, numero:number) : string {
    // Estructura de control de flujo condicional
    if (promedio > numero){
        return "mayor"
    } else if (promedio < numero){
        return "menor"
    } else {
        return "igual"
    }
}

// Función para obtener el numero mayor
function promedioMayorMenor(numeros: Array<number>, numero: number) : string {
    let promedioNumero = promedio(numeros)
    return compararPromedio(promedioNumero, numero)
}

// Prueba de las funciones
const numeros4 = [3, 5, 7, 8, 10, 14, 16, 18, 20]
const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const numeros6 = [10, 20, 10]

console.log(promedioMayorMenor(numeros4, 5))
console.log(promedioMayorMenor(numeros5, 8))
console.log(promedioMayorMenor(numeros6, 20))