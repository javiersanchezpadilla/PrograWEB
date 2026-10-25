/* FUNCIONES COMO OBJETOS.

Una funcion pertenece al tipo <function>
Pero es importante entender que relamente las funciones pertenecen a una 
clae llamada <class funtion>, por lo que al ser clases contienen propiedades
y métodos.

PROPIEDADES DE LAS FUNCIONES:
-----------------------------

arguments.length        Permite conocer el número de argumentos de la función
                        Solo se puede usasr dentro de la función.

MÉTODOS DE LAS FUNCIONES:
-------------------------                        
toString()              Manda a llamar a la funcion como si fuera un texto.

*/

function mi_funcion(a, b) {
    // solo funciona dentro de una función
    console.log(arguments.length);
    return a + b;
}


let sumar = mi_funcion(10, 5);
console.log("El tipo de datos alque pertenece la funciones es :: " + typeof (mi_funcion));

// El resultado es que convierte la funcion a texto, realmente el resultado no es 
// relevante, lo importante es entender que las funciones pretenecen a una clase.
var mi_funcion_texto = mi_funcion.toString();
console.log(mi_funcion_texto);

