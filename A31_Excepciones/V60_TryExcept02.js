/* MANEJO DE EXCEPCIONES ERRORES EN FUNCIONES

Por ejemplo si intentamos llamar a una función que no esta definida,podemos
atrapar el error y así evitar que el programa se interrumpa

 ALT ↑      Mueve lo seleccionado hacia arriba
 ALT ↓      Mueve lo seleccionado hacia abajo
*/

"use strict"
                                // Sometemos a un bloque TRY para evaluar la 
try {                           // llamada a una función que no fué declarada
    mi_funcion();

}                               // En caso de error lo atrapamos en la 
                                // variable el _errorsote, la cual en caso de 
                                // error  almacenara el tipo de error y el 
                                // mensaje de eror, pero lo mas importante es
                                // que no detiene la ejecución del programa
catch(el_errorsote){            
    console.log(el_errorsote);
}

console.log("continuaos...");
