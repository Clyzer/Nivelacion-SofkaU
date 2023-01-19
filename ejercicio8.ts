const Regex3 = RegExp(/\s/g)

function crearPalindromo2(texto: string) : Array<string>{
    let palindromo : Array<string> = texto.toUpperCase().replace(Regex3, "").split("")
    let izquierda : Array<string> = texto.toUpperCase().replace(Regex3, "").split("").reverse()
    if (palindromo.slice(-1).toString() === izquierda[0]){
        izquierda = izquierda.slice(1)
    }
    palindromo = palindromo.concat(izquierda)
    return palindromo
}

console.log(crearPalindromo2("Hola"))
console.log(crearPalindromo2("Como"))
console.log(crearPalindromo2("Estas"))
console.log(crearPalindromo2("Hoy"))