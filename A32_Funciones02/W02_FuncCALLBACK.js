/* FUNCIONES CALLBACK (FUNCIONES QUE RECIBEN COMO ARGUMENTOS OTRAS FUNCIONES)

Básicamente una función de tipo CALLBACK es una función que se pasa como 
parámetro a otra función y dentro de una función vamos a poder llamar a otra 
función.

        foo (..., funcion(){ 
                callbackfuction
                },...);

        function foo (.., callback, ... ) {
            Hacer alguna cosa
            callback
            hacer otra cosa
        }


Como podemos observar en la figura, tenemos una primera función, en este caso 
una función cualquiera, y posteriormente recibimos como parámetro una función.
A esta función se le va a llamar como una función del tipo CALLBACK o llamar 
devuelta y posteriormente, ya que estamos dentro del código de nuestra función
podemos hacer uso de la función CALLBACK para mandar a llamar esta función.

Así que básicamente sería mandar a llamar a una función dentro de otra función, 
pero recibiendo como argumento esta función.

*/


// Ejemplo para poner en contexto y poder explicar el tema de funciones 
// CALLBACK, este ejemplo es un ejemplo de ejecución normal en el uso de 
// funciones

function miFuncion01(){
    console.log('Estoy en la funcion 01');
}

function miFuncion02(){
    console.log('Estoy en la función 02')
}

// Las funciones se ejecutan de manera secuencial, en este caso primero
// se ejecuta la funcion02() y posteriormente la funcion01()
miFuncion02();
miFuncion01();



// ------------------------------------------------------------
// EJEMPLO 01 .CONCEPTO DEL USO DE FUNCIONES DEL TIPO CALLBACK
// ------------------------------------------------------------
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBck){
    // Recibe tres argumentos
    // op1              valor uno numerico
    // op2              valor dos numerico
    // funcionCallBck   Función del tipo CallBack
    let resultado = op1 + op2;
    funcionCallBck(`Resultado: ${resultado}`);
}


// Dado que las funciones tambien son objetos, no es necesario indicar los
// parentesis, solo se requiere el nombre que es "imprimir"
sumar(5, 3, imprimir)


// ------------------------------------------------------------
// EJEMPLO 02 .CONCEPTO DEL USO DE FUNCIONES DEL TIPO CALLBACK
// ------------------------------------------------------------
let impri = function imprimir(mensaje){
                console.log(mensaje);
                }

function multiplicar(op1, op2, funcionCallBck){
    let resultado = op1 * op2;
    funcionCallBck(`Resultado: ${resultado}`);
}


// Prueba del ejemlo 02
multiplicar(10, 2, impri);


