function numerosPares(array) {
    let par = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            par.push(array[i]);
        } else {
            console.log(array[i], 'não é par!');
        }
    }
    console.log('Os números pares são: ', par);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

numerosPares(numeros);