class Empleado {
    protected nombre: string;
    protected antiguedadAnos: number;

    constructor(nombre: string, antiguedadAnos: number) {
        this.nombre = nombre;
        this.antiguedadAnos = antiguedadAnos;
    }

    calcularSueldo(): number {
        return 0;
    }

    describir(): string {
        return `${this.nombre}, antiguedad; ${this.antiguedadAnos} años, sueldo de: ${this.calcularSueldo()}`;
    }

}

class EmpleadoTiempoCompleto extends Empleado {
    private sueldoBase: number;

    constructor(nombre: string, antiguedadAnos: number, sueldoBase: number) {
        super(nombre, antiguedadAnos);
        this.sueldoBase = sueldoBase;
    }
    //sobreescribiendo el metodo calcularSueldo1
    calcularSueldo(): number {
        const bonoAntiguedad = this.sueldoBase * 0.02 * this.antiguedadAnos;
        return this.sueldoBase + bonoAntiguedad;
    }
}


//pruebiiitas 
const nuevoEmpleado = new Empleado("anahi", 5);
console.log(nuevoEmpleado.describir());

//pruebas sobre la clase extendida

const empleadoTiempoCompleto = new EmpleadoTiempoCompleto("jacqueline", 5, 2000);
console.log(empleadoTiempoCompleto.describir());