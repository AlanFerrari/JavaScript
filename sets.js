const meuArray = [30, 30, 50, 4, 223, 2502, 3013, 3109, 4];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return[...mySet];
}
console.log(valoresUnicos(meuArray));