function crearPalindromo(texto: string) : string{
    return texto.toUpperCase().substring(0, texto.length - 1) + texto.toUpperCase().split("").reverse().join("")
}

console.log(crearPalindromo("Hola"))
console.log(crearPalindromo("Como"))
console.log(crearPalindromo("Estas"))
console.log(crearPalindromo("Hoy"))