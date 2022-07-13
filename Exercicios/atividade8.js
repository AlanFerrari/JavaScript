function validarArray(arr, num){
    try {
        if (!arr && !num) {
            throw new ReferenceError('Envie os parãmetros');
        }
        if(typeof arr !== 'object')
            throw new TypeError('Array precisa ser do tipo object');

        if(typeof num !== 'number')
            throw new TypeError('Num precisa ser do tipo number');

        if(arr.length !== num)
            throw new RangeError('Tamanho inválido!');

        return arr;

    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!');
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log('Este erro é um TypeError!');
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log('Este erro é um RangeError');
            console.log(error.message);
        } else {
            console.log('Tipo de erro não esperado: ' + error);
        }
    }
}

console.log(validarArray([5, 1, 4, 6, 0], 5));