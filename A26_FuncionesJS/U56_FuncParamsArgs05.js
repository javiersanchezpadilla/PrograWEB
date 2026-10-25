/* FUNCIONES, PASO POR VALOR Y POR REFERENCIA

*/

// La variable solo vive dentro de la función, no modifica el valor
// del argumento origian
function cambiarValor(a){
    // solo vive dentro de la función
    a = 20;
}


// Definimos un valor primitivo
let x = 10;

// Paso por valor, cuando regresa el valor de x sigue siendo 10 x=10
cambiarValor(x);
console.log(x);
