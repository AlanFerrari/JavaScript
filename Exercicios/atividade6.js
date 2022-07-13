function somaNumeros(array){
    return array.reduce(function(anterior, atual){
        console.log({anterior});
        console.log({atual});
        return anterior + atual;
    }, 0);
}

const array = [1, 2];

console.log(somaNumeros(array));