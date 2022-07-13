function filtraPares(array){
    return array.filter(retorno);
}

function retorno(item){
    return item % 2 === 0;
}

const meuArray = [1, 5, 20, 41, 24, 14, 19];

console.log(filtraPares(meuArray));