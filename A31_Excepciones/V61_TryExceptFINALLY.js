/* BLOQUE FINALLY

Este bloque siempre se ejecutará independientemente de que haya
habido error o no

 ALT ↑      Mueve lo seleccionado hacia arriba
 ALT ↓      Mueve lo seleccionado hacia abajo
*/

"use strict"
                                // Sometemos a un bloque TRY para evaluar la 
try {                           // expresión x=10 que no fue declarada
    x = 10;

}                               // En caso de error lo atrapamos en la 
                                // variable el _errorsote, la cual en caso de 
                                // error  almacenara el tipo de error y el 
                                // mensaje de eror, pero lo mas importante es
                                // que no detiene la ejecución del programa
catch(el_errorsote){            
    console.log(el_errorsote);
}
finally {
    console.log("Esto se ejecuta siempre sin importar si hubo error o no");
}

console.log("continuaos...");
