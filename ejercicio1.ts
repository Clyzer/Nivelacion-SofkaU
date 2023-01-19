// Función para calcular el área de un circulo
function areaCirculo(radio: number) : number {
    return +(Math.PI * Math.pow(radio, 2)).toFixed(2)
}

// Prueba de la función
console.log("El área del circulo con radio 3 es " + areaCirculo(3))