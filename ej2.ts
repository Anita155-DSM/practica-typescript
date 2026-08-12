class CuentaBancaria {
    titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number){
        this.titular = titular
        this.saldo = saldo
    }

}

let movimientosPriv = []