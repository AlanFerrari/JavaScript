var currentNumber = document.getElementById("currentNumber");
var contador = 0;

function increment() {
    contador = contador + 1;
    currentNumber.innerHTML = contador;
}

function decrement() {
    contador = contador - 1;
    currentNumber.innerHTML = contador;
}
