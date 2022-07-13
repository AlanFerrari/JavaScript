const lista = [
    {
        nome: 'sabão em pó',
        preco: 25,
    },
    {
        nome: 'cereal',
        preco: 15,
    },
    {
        nome: 'toalha',
        preco: 30,        
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(anterior, atual, index){
        console.log('rodada ', index + 1);
        console.log({anterior});
        console.log({atual});
        return anterior - atual.preco;        
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));