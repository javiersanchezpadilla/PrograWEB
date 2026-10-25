/* MANEJO DE FUNCIONES

function nombreFuncion(arg1, arg2) {
    instrucciones
}

El HOISTING es un comportamiento de JavaScript donde las declaraciones de 
variables, funciones o clases se elevan conceptualmente al inicio de su 
contexto de ejecución antes de que se ejecute el código.

Lo anterior permiteque las funciones pueden ser llamadas en cualquier parte 
de nuestro programa (HOISTING)
*/

// Llamando a la funcion desde antes de su declaración
mi_funcion(5, 5);


function mi_funcion(a, b) {
    console.log("Suma: " + (a + b))
}


// Llamando a la funcion después de su declaración
mi_funcion(10, 20);
