let entradaActual = '';
let operadorActual = '';
let entradaAnterior = '';

function añadirNumero(numero) {
    entradaActual += numero;
    document.getElementById('resultado').value = entradaActual;
}

function limpiarResultado() {
    entradaActual = '';
    entradaAnterior = '';
    operadorActual = '';
    document.getElementById('resultado').value = '';
}

function realizarOperacion(operador) {
    if (entradaActual === '') return;
    if (entradaAnterior !== '') calcular(); 
    
    entradaAnterior = entradaActual;
    operadorActual = operador;
    entradaActual = '';
    document.getElementById('resultado').value = operadorActual;
}

function calcular() {
    if (entradaActual === '' || operadorActual === '') return;

    const num1 = parseFloat(entradaAnterior);
    const num2 = parseFloat(entradaActual);
    let resultado;

    switch (operadorActual) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '%':
            resultado = num1 % num2;
            break;
        default:
            return;
    }

    document.getElementById('resultado').value = resultado;
    entradaAnterior = resultado;
    entradaActual = '';
    operadorActual = '';
}
