/* FUNCIONES DEL TIPO EXPRESIÓN O ANONIMAS

*/

// Declaramos la funcion del tipo expresión o anonima
// La variable "sumar" contiene la referencia a la funcion
let sumar = function (a, b){return a + b};

let resultado = sumar(10, 20);

console.log("La suma de 10 + 20 = " + resultado);

console.log("La suma de 100 + 39 = " + sumar(100, 39));
