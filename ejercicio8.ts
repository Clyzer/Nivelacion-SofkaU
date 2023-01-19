// Creamos una expresion Regex que busque todos los espacios
const Regex2 = RegExp(/\s/g)

// En este caso utilizamos unicamente metodos de los array para realizar lo anteriormente hecho y lo devolvemos como tal
function crearPalindromo2(texto: string) : Array<string>{
    let palindromo : Array<string> = texto.toUpperCase().replace(Regex2, "").split("")
    let izquierda : Array<string> = texto.toUpperCase().replace(Regex2, "").split("").reverse()
    if (palindromo.slice(-1).toString() === izquierda[0]){
        izquierda = izquierda.slice(1)
    }
    palindromo = palindromo.concat(izquierda)
    return palindromo
}

// Para finalizar probamos la función
console.log(crearPalindromo2("Hola"))
console.log(crearPalindromo2("Como"))
console.log(crearPalindromo2("Estas"))
console.log(crearPalindromo2("Hoy"))