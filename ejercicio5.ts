interface FiguraGeometrica {
    calcularArea() : void
    calcularPermitero() : void
}

abstract class Figura implements FiguraGeometrica {
    constructor(nombreFigura: string) {
        this.nombre = nombreFigura
    }
    abstract calcularArea() : void
    abstract calcularPermitero() : void
    private nombre: string
}

class Circulo extends Figura {
    radio: number
    constructor(nombreFigura: string, radio: number) {
        super(nombreFigura)
        this.radio = radio
    }
    calcularPermitero() : number {
        return +(Math.PI * (this.radio * 2)).toFixed(2)
    }
    calcularArea(): number {
        return +(Math.PI * Math.pow(this.radio, 2)).toFixed(2)
    }
}

class Cuadrado extends Figura {
    lado: number
    constructor(nombreFigura: string, lado: number) {
        super(nombreFigura)
        this.lado = lado
    }
    calcularPermitero() : number {
        return +(4 * this.lado).toFixed(2)
    }
    calcularArea(): number {
        return +(Math.pow(this.lado, 2)).toFixed(2)
    }
}

class CrearFiguras {
    crear(nombre: string, tipo: string, valor: number){
        if (tipo == "Circulo"){
            return new Circulo(nombre, valor)
        } else if (tipo == "Cuadrado"){
            return new Cuadrado(nombre, valor)
        } else {
            return null
        }
    }
}

const figuras = new CrearFiguras
const circulo = figuras.crear("Circulito", "Circulo", 1)
const cuadrado = figuras.crear("Cuadradito", "Cuadrado", 2)

console.log("El area del circulo creado es " + circulo?.calcularArea() + " y su perimetro es " + circulo?.calcularPermitero())
console.log("El area del cuadrado creado es " + cuadrado?.calcularArea() + " y su perimetro es " + cuadrado?.calcularPermitero())