/* MANEJO DE EXCEPCIONES EL USO DE UNA VARIABLE QUE NO HA SIDO DECLARADA

Trabajaremos en modo estricto, para forzar buenas prácticas
Cuando se genera un error, la ejecución del código se suspende

El error esta en que al usar el modo estricto, debemos declarar siempre
las variables por ejemplo let x = 10;, en este ejemplo manda error, pero
el mayor problema es que cuando se detecta un error se interrumpe la 
ejecución de un programa impidiendo avanzar

        "use strict"

        x = 10;     
        console.log("continuaos...");


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

console.log("continuaos...");

