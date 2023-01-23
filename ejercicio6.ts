// Creamos una expresion Regex que busque todos los espacios
const Regex = RegExp(/\s/g)

/* Creamos una funcion que crea una variable con el texto y luego: pone el texto en mayusculas, elimina los espacios, divide el texto en caracteres, los pone en reversa
    y vuelve a unir los caracteres para luego comprobar el texto original si son iguales
    
    Si son iguales devuelve true
    Si no son iguales devuelve false
*/
function esPalindromo(texto : string) : boolean {
    let izquierda = texto.toUpperCase().replace(Regex, "").split("").reverse().join("")
    // Estructura de control de flujo condicional
    if (texto.toUpperCase().replace(Regex, "") == izquierda){
        return true
    } else {
        return false
    }
}

// Para finalizar comprobamos la función con distintos ejemplos
console.log(esPalindromo("Hola"))
console.log(esPalindromo("Somos"))
console.log(esPalindromo("Son robos o sobornos"))
console.log(esPalindromo("Calor"))
console.log(esPalindromo("Anula la luna"))