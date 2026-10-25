/* USO DE LAS FUNCIONES DEL TIPO FLECHA

Es similar a las funciones del tipo expresión

Las funciones del tipo flecha no se declaran con "let", cuando usamos
"let" corremos el riesgo de poder cambiar el contenido de la variable.
sin embargo, cuando son declaradas con "const" ya no es posible poder
cambiar el contenido de la variable.

Con funciones el tipo flecha ya no es requerido el uso de la palabra function
tmapoco se requieren llaves, ahora se reemplaza por el operador flecha (=>), 
no requiere la palabra return

Automáticamente retorna el resultado (ya no requieres return) ---+
se eliminan las llaves y se asigna el operador flecha ------+    |
Se definen los parámetros --------------------------+       |    |
Indica que inicia la funcion-----------------+      |       |    |
Nombre de la funcion------------------+      |      |       |    |
Palabra reservada ------------+       |      |      |       |    |
                              |       |      |      |       |    |
                              ▼       ▼      ▼      ▼       ▼    ▼    
                            const nombreFunf = (arg1, arg2) => a + b

                            const sumar_funcion_tipo_flecha = (a, b) => a + b;

La función es almacenada en memoria
*/

// Declaración de una función normal
let sumar = function (a, b){return a + b};
let resultado = sumar(10, 20);

// Declaración de una función del tipo flecha
const sumar_funcion_tipo_flecha = (a, b) => a + b;
let resultado_flecha = sumar_funcion_tipo_flecha(3, 5);

// Llamamos a la función normal
console.log("Resultado mediante la función normal:")
console.log("La suma de 10 + 20 = " + resultado);

// Llamamos a la función del tipo flecha
console.log("Resultado mediante la función Flecha:")
console.log("La suma de 3 + 5 = " + resultado_flecha);

