// Creamos una expresion Regex que busque todos los espacios
const Regex3 = RegExp(/\s/g)

// En este caso utilizamos unicamente metodos de los array para realizar lo anteriormente hecho y lo devolvemos como tal
function crearPalindromo2(texto: string) : Array<string>{
    let palindromo = Array.from(texto.toUpperCase().replace(Regex3, ""))
    palindromo = palindromo.slice(0, palindromo.length - 1)
    let izquierda = Array.from(texto.toUpperCase().replace(Regex3, "")).reverse()
    palindromo = palindromo.concat(izquierda)
    return palindromo
}

// Para finalizar probamos la función
console.log(crearPalindromo2("Hola"))
console.log(crearPalindromo2("Como"))
console.log(crearPalindromo2("Estas"))
console.log(crearPalindromo2("Hoy"))