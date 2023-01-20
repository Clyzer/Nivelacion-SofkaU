// Creamos una función que elimina el ultimo caracter del texto dado y le agrega el mismo texto pero en reversa
function crearPalindromo(texto: string) : string{
    let reversa = ""
    for (let index = texto.length - 1; index >= 0; index--) { 
        reversa = reversa + texto[index];
    }
    return texto.toUpperCase().substring(0, texto.length - 1) + reversa.toUpperCase()
}

// Para finalizar probamos la función
console.log(crearPalindromo("Hola"))
console.log(crearPalindromo("Como"))
console.log(crearPalindromo("Estas"))
console.log(crearPalindromo("Hoy"))