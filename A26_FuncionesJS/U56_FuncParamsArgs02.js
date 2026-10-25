/* MAS SOBRE EL CONCEPTO DE FUNCIONES, PARAMETROS Y ARGUMENTOS

MANEJO DE PARÁMETROS POR AUSCENCIA. 
-----------------------------------
En este ejemplo se justifica el porque se distingue entre argumentos y 
parámetros, ya que la función usa el metodo .arguments y el resultado 
es undefined
*/


// Puede parecer que no está funcionando correctamente, sin embargo
// el metodo arguments solo verifica los ARGUMENTOS no los PARÁMETROS 
// por lo que verifica y detecta que no fueron enviados argumentos desde
// la llamada a la función
function sumar(a=10, b=20) {
    console.log("Total de argumentos de la función: " + arguments.length);
    console.log("Argumento 1: " + arguments[0]);
    console.log("Argumento 2: " + arguments[1]);
    return a + b;
}

// Se llama de manera normal a la función sin argumentos
let prueba01 = sumar();
console.log(prueba01);
