class CuentaBancaria {
    titular: string;
    private saldo: number;
    private historial: string[] = []

    constructor(titular: string, saldo: number){
        this.titular = titular
        this.saldo = saldo
    }

    //depositar
    depositar(cantidad: number): void {
        if (cantidad <= 0) {
            console.log("la cantidad debe ser mayor a 0");
            return;
        }
        this.saldo += cantidad;
        this.historial.push(`se deposito la cantidad de $ ${cantidad}`);
    }

    //retirar
    retirar(cantidad: number): void {
        if (cantidad <= 0 || cantidad > this.saldo) {
            console.log("la cantidad debe ser mayor a 0 y no puede ser más del saldo dispomible");
        } else {
            this.saldo -= cantidad;
            this.historial.push(`se retiro la cantidad de $ ${cantidad}`);
        }
    }

    //obtener el saldo
    obtenerSaldo(): number {
        return this.saldo;
    }

    //obtener el historial
    obtenerHistorial(): string[] {
        return this.historial;
    }
}

console.log("Probando que el archivo ejecuta...");

//pruebiiitass 
const cuenta = new CuentaBancaria("Anahi", 1000);
cuenta.depositar(500);
cuenta.retirar(200);
console.log(cuenta.obtenerSaldo()); // 1300
console.log(cuenta.obtenerHistorial()); // ["se deposito la cantidad de $ 500", "se retiro la cantidad de $ 200"]