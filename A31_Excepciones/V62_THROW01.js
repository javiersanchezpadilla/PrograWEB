/* CLAUSULA THROWS

Existe la cláusula throws con la cual podemos arrojar nuestros propios errores
personalizados, por ejemplo, como hemos visto, SI POR ALGUNA RAZÓN QUISIÉRAMOS 
ARROJAR UN NUEVO ERROR, entonces podemos utilizar esta cláusula.
La cláusula throws personaliza una nueva excepción, la cual interpreta el 
bloque catch arrojando la excepción con el texto personalizado que definimos 
mediante THROWS
REALMENTE lo que vamos a hacer es crear nuevas validaciones y con base a estas
validaciones podemos crear los errores nuevos, no precisamente por condiciones
de error sobre declaraciones o errores comunes del sistema
VER SIGUIENTE EJEMPLO PARA ENTENDER MEJOR LA APLICACIÓN DEL TEMA.

*/

"use strict"
                                // Sometemos a un bloque TRY para evaluar la 
try {                           // expresión let x=10 que no tiene errores
    let x = 10;
                                // Creamos un nuevo error
    throw "Mi nuevo error";  

}                               // Com definimos un nuevo error (aunque en el caso
                                // En caso anterior realmente no existe errror)
                                // pero forzamos la creación de un nuevo error
                                // tomara ahora el mensaje del error 
                                // definido a traves de THROW
catch(el_error){            
    console.log(el_error);
}
finally {
    console.log("Termina la revisión de errores");
}

console.log("continuaos...");
