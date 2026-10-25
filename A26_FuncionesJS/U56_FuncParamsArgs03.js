/* MAS SOBRE EL CONCEPTO DE FUNCIONES, PARAMETROS Y ARGUMENTOS

EN JAVASCRIP NO SE EXIGE QUE EL NÚMERO DE ARGUMENTOS SEA IGUAL AL 
NUMERO DE PARAMETROS.

Ya se vió que sucede si enviamos menos argumentos de los requeridos al momento
de llamar un función, ¿pero que sucede su llamamos a la función con mas 
argumentos de los requeridos?
Simplemente al ser distintos los argumentos de los parámetros se permite, solo
no olvidar que si estos argumentos no se reciben a travez de un parámetro 
entonces no se pueden usar, aunque existe como alternativa usarlos directamente
a traves del método
*/


// Puede parecer que no está funcionando correctamente, sin embargo
// el metodo arguments solo verifica los ARGUMENTOS no los PARÁMETROS 
// por lo que verifica y detecta que no fueron enviados argumentos desde
// la llamada a la función
function sumar(a=10, b=20) {
    console.log("Total de argumentos de la función: " + arguments.length);
    console.log("Argumento 1: " + arguments[0]);
    console.log("Argumento 2: " + arguments[1]);
    console.log("Argumento 3: " + arguments[2]);
    console.log("Argumento 4: " + arguments[3]);
    return a + b;
}

function sumar_version_menorada(a=10, b=20) {
    console.log("Total de argumentos de la función: " + arguments.length);
    console.log("Argumento 1: " + arguments[0]);
    console.log("Argumento 2: " + arguments[1]);
    console.log("Argumento 3: " + arguments[2]);
    console.log("Argumento 4: " + arguments[3]);

    return a + b + arguments[2] + arguments[3];
}


// Se llama de manera normal a la función sin argumentos
let prueba01 = sumar(10, 20, 300, 400);
console.log(prueba01);

let prueba02 = sumar_version_menorada(10, 20, 300, 400);
console.log(prueba02);
