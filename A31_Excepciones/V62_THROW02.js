/* CLAUSULA THROWS PROCESAR ERRORES PERSONALIZADOS

Vamos a declarar una variable llamada resultado y vamos a asignarle el valor 
de 5 y lo que vamos a hacer es realizar algunas comprobaciones para saber
si esta variable realmente es un tipo numérico y además saber si es un valor 
positivo o negativo y dependiendo de este resultado, arrojar un error 
dependiendo del caso que coincida bien, así que vamos a agregar lo siguiente 
vamos a agregar nuestro bloque try catch para procesar todo dentro de este 
bloque.
*/

"use strict";

let resultado = "";
// resultado = 'Hola';
// resultado = 10;
// resultado = -20;

try {
    if (isNaN(resultado)) throw 'No es un número';
    else if (resultado === '') throw 'Es cadena vacia';
    else if (resultado >=0) throw 'VAlor positivo';
    else if (resultado <= 0) throw 'Valor negativo';

}
catch (error_javier){
    console.log(error_javier);
    console.log(error.name);
    console.log(error.message);
}