// Creamos la interfaz "FiguraGeometrica" y le agregamos 2 métodos vacios como parametros
interface FiguraGeometrica {
    calcularArea() : number
    calcularPermitero() : number
}

// Añadimos una clase abstracta que implemente la interface anterior y le creamos un constructor para darle un valor a su nueva propiedad "nombre" que sera privada
abstract class Figura implements FiguraGeometrica {
    private nombre : string
    constructor(nombreFigura : string) {
        this.nombre = nombreFigura
    }
    abstract calcularArea() : number
    abstract calcularPermitero() : number
}

// Ahora si creamos una clase que se extiende de la clase anterior y le agrega como propiedad un "radio" y sobreescribimos los metodos ahora si con sus respectivas formulas
class Circulo extends Figura {
    radio : number
    constructor(nombreFigura : string, radio : number) {
        super(nombreFigura)
        this.radio = radio
    }
    // Perimetro de un circulo = PI * (radio * 2) (Al resultado le dejamos unicamente las primeras 2 decimales)
    calcularPermitero() : number {
        return +(Math.PI * (this.radio * 2)).toFixed(2)
    }
    // Area de un circulo = PI * radio^2 (Al resultado le dejamos unicamente las primeras 2 decimales)
    calcularArea() : number {
        return +(Math.PI * Math.pow(this.radio, 2)).toFixed(2)
    }
}

// Hacemos lo mismo que arriba pero esta vez para un cuadrado, en este caso la propiedad que se le agregara sera "lado" y tambien sobreescribimos los metodos con sus formulas
class Cuadrado extends Figura {
    lado: number
    constructor(nombreFigura : string, lado : number) {
        super(nombreFigura)
        this.lado = lado
    }
    // Perimetro de un cuadrado = lado * 4 (Al resultado le dejamos unicamente las primeras 2 decimales)
    calcularPermitero() : number {
        return +(4 * this.lado).toFixed(2)
    }
    // Area de un cuadrado = lado^2 (Al resultado le dejamos unicamente las primeras 2 decimales)
    calcularArea() : number {
        return +(Math.pow(this.lado, 2)).toFixed(2)
    }
}

// Creamos un enum para definir los tipos de figuras que existen para utilizarlos en la funcion de CrearFiguras
enum tipos {circulo, cuadrado}

/* Por ultimo creamos una clase que tiene una funcion para utilizar una estructura de control de flujo condicional
   para crear utilizando un nombre dado, un tipo y un valor */
class CrearFiguras{
    // Creamos una variable para acceder mas facilmente al enum previamente creado en la misma class
    tipofigura = tipos
    // Por ultimo se crea la funcion mencionada en los comentarios anteriores
    crear(nombre : string, tipo : tipos, valor : number){
        if (tipo == tipos.circulo){
            return new Circulo(nombre, valor)
        } else if (tipo == tipos.cuadrado){
            return new Cuadrado(nombre, valor)
        } else {
            return null
        }
    }
}

// Para finalizar ponemos a prueba todo el codigo

const figuras = new CrearFiguras
const circulo = figuras.crear("Circulito", figuras.tipofigura.circulo, 1)
const cuadrado = figuras.crear("Cuadradito", figuras.tipofigura.cuadrado, 2)
console.log("El area del circulo creado es " + circulo?.calcularArea() + " y su perimetro es " + circulo?.calcularPermitero())
console.log("El area del cuadrado creado es " + cuadrado?.calcularArea() + " y su perimetro es " + cuadrado?.calcularPermitero())