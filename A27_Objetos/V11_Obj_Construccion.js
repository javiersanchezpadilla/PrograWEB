/* DISTINTAS FORMAS DE CREACIÓN DE OBJETOS.

En los ejemplos siguientes se muestra la manera de crear objetos, 
FORMA 1  La manera "formal" indicando la clase a la que pertenece
FORMA 2  La manera común y simplificada de hacerlo
*/

// CREAR UN OBJETO
let mi_objeto = new Object();               // FORMA 1. Mediante el uso de new
let mi_objeto2 = {};                        // FORMA 2. recomendada y común

// CREACIÓN DE OBJETOS DEL TIPO CADENA DE TEXTO
let mi_cadena1 = new String('Hola');        // Mediante la clase
let mi_cadena2 = 'Hola';                    // Manera común y simplificada

// CREACIÓN DE OBJETOS DEL TIPO NUMERICO
let mi_numero1 = new Number(20);            // Mediante la clase
let mi_numero2 = 35;                        // Simplificada

// CREACIÓN DE OBJETOS DEL TIPO BOOLEANO
let mi_boleano1 = new Boolean(true);        // Mediante la clase
let mi_boleano2 = false;                    // Simplificada

// CREACIÓN DE OBJETOS DEL TIPO ARREGLO
let mi_arreglo1 = new Array();              // Mediante la clase
let mi_arreglo2 = [];                       // Simplificada

// CREACIÓN DE OBJTETO DEL TIPO FUNCIÓN
let mi_funcion1 = new function();           // Mediante la clase
let mi_funcion2 = function();               // Simplificada
