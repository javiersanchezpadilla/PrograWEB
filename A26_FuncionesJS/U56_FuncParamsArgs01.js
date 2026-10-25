/* FUNCIONES DEFINICIÓN DE PARÁMETROS Y ARGUMENTOS.

"LOS PARÁMETROS ES LA LISTA DE VARIABLES QUE DEFINIMOS EN UNA FUNCIÓN Y LOS 
ARGUMENTOS SON LOS VALORES QUE PASAMOS CUANDO MANDAMOS A LLAMAR UNA FUNCIÓN."

El concepto de argumentos y parámetros, aunque la mayoría de los casos 
podríamos decir que los argumentos y los parámetros de una función es 
exactamente lo mismo, vmos a hacer una diferencia entre estos dos conceptos 
para tener claro cuál es la diferencia entre cada uno, en términos reales, en 
la práctica real podemos manejarlos de manera equivalente.
Cuando definimos una función, podemos observar que dentro de los paréntesis 
hemos definido variables y a esto se le va a conocer como parámetros de nuestra 
función.
Así que de manera formal, cuando definimos o declaramos una función, las 
variables que va a recibir esta función se conocen como parámetros, es la lista
de valores que va a recibir una función, en cambio, los argumentos son los 
valores que finalmente pasamos a nuestra función, así que cuando mandamos a 
llamar nuestra función, estos van a ser los argumentos, ya que son los valores
que finalmente vamos a asignar a los parámetros que hemos definido en nuestra 
función.

¿QUÉ PASA SI LLAMAMOS A LA FUNCIÓN CON MENOS ARGUMENTOS DE LOS REQUERIDOS?
--------------------------------------------------------------------------
JavaScript es muy flexible lo ue hace es asinnar el total de argumentos a los 
parámetros y el resto les asigna como "undefined" (es muy flexible)

*/


function sumar(a, b) {
    let primer_argumento = arguments[0];
    let segundo_argumento = arguments[1];

    console.log("Total de argumentos de la función" + arguments.length);
    console.log("Argumento 1: " + primer_argumento);
    console.log("Argumento 2: " + segundo_argumento);
    return a + b;
}

// Se llama de manera normal a la función 2 argumentos para 2 parámetros
let prueba01 = sumar(10, 20);
console.log(prueba01);

// Se llama con menos argumentos de los requeridos a=100, b=undefined, 
// regresa NaN Not a Number
let prueba02 = sumar(100);
console.log(prueba02);

// Se llama con ningún argumento, por lo que parametro a=undefined, b=undefined 
// resultado NaN
let prueba03 = sumar();
console.log(prueba03);
