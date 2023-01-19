const Regex = RegExp(/\s/g)

function esPalindromo(texto : string) : boolean {
    let izquierda = texto.toUpperCase().replace(Regex, "").split("").reverse().join("")
    if (texto.toUpperCase().replace(Regex, "") == izquierda){
        return true
    } else {
        return false
    }
}

console.log(esPalindromo("Hola"))
console.log(esPalindromo("Somos"))
console.log(esPalindromo("Son robos o sobornos"))
console.log(esPalindromo("Calor"))
console.log(esPalindromo("Anula la luna"))