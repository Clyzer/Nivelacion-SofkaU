// Creamos una expresion Regex que busque todos los espacios
const Regex2 = RegExp(/\s/g)

// Creamos una función que elimina el ultimo caracter del texto dado y le agrega el mismo texto pero en reversa
function crearPalindromo(texto: string) : string{
    let reversa = ""
    for (let index = texto.length - 1; index >= 0; index--) { 
        reversa = reversa + texto[index];
    }
    return texto.toUpperCase().replace(Regex2, "") + reversa.toUpperCase().replace(Regex2, "")
}

// Para finalizar probamos la función
console.log(crearPalindromo("Hola"))
console.log(crearPalindromo("Como"))
console.log(crearPalindromo("Estas"))
console.log(crearPalindromo("Hoy"))