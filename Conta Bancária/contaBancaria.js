class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo  = 0;
    }

    sacar(valor){
        if(valor > this._saldo){
            return console.log('Saque negado, saldo insuficiente!');
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    get saldo(){
        return this._saldo;
    }
    
    set saldo(valor){
        this._saldo = valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupaca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação inválida, limite máximo de 500 reais!';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const minhaConta = new ContaCorrente(1, 200, true);
const contaUni = new ContaUniversitaria(2, 202);