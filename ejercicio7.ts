// Creamos una función que elimina el ultimo caracter del texto dado y le agrega el mismo texto pero en reversa
function crearPalindromo(texto: string) : string{
    return texto.toUpperCase().substring(0, texto.length - 1) + texto.toUpperCase().split("").reverse().join("")
}

// Para finalizar probamos la función
console.log(crearPalindromo("Hola"))
console.log(crearPalindromo("Como"))
console.log(crearPalindromo("Estas"))
console.log(crearPalindromo("Hoy"))