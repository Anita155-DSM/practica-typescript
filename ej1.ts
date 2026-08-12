class Producto {
    nombre: string;
    precio: number;
    categoria: string;
    stock: number;


    constructor(nombre: string, precio: number, categoria: string, stock: number){
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }
    //retorna nombre precio etc de producto
    describir(): string {
        return `${this.nombre}, $${this.precio}, ${this.categoria}, ${this.stock}`;
    }
    hayStock(cantidad: number): boolean {
        return this.stock >= cantidad
    }
    //si hay stock vende sino no
    venderUnidades(cantidad: number): void {
        if (this.hayStock(cantidad)) {
            this.stock -= cantidad
            console.log(`nuevo stock de ${this.nombre} ahora hay ${this.stock}`)
        } else {
            console.log("no hay stock")
        }
    }
    aplicarDescuento(porcentaje: number): number {
        const descuento = (this.precio * porcentaje) / 100;
        return this.precio - descuento;
    }
}

const primerProducto = new Producto("Auriculares", 5000, "Audio", 2)
//console.log(primerProducto) //esto es para probar nms

console.log(primerProducto.describir())
console.log(primerProducto.hayStock(2))
console.log(primerProducto.venderUnidades(1))
console.log(primerProducto.describir())
console.log(primerProducto.aplicarDescuento(10))
console.log(primerProducto.describir())


