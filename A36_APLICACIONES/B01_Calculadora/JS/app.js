// Estos es para verificar que este conectada nuestra aplicación javascripts
// console.log('Aplicación Calculadora');


// Mi formulario tiene id=forma, los operandos id=operandoA y id=operandoB
function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // DEbemos conertir los valores a números o de lo contrario solo se 
    // concatenaran las variable 
    // let resultado = operandoA.value + operandoB.value;

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    // Para evitar valores vacios sumados que nos da NaN Not a Number
    if(isNaN(resultado)){ resultado = 'La operación no incluye números'};

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}