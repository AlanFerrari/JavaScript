function calculaIade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};
const pessoa2 = {
    nome: 'João',
    idade: 25,
};
const pessoa3 = {
    nome: 'Marcia',
    idade: 48,
};

console.log(calculaIade.call(pessoa2, 15));
console.log(calculaIade.apply(pessoa3, [25]));