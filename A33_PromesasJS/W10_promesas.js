/* PROMESAS EN JAVASCRIPT


Para entender este concepto necesitamos ya tener claro los conceptos que hemos 
visto hasta el momento sobre las funciones del tipo CALLBACK y el manejo de las
FUNCIONES DEL TIPO FLECHA (es muy importante para poder entender este tema).
Básicamente en una promesa vamos a utilizar funciones de tipo CALLBACK, una
promesa básicamente es código que tiene varios estados, así que vamos a poder 
lanzar una petición para procesar un código, en dado caso de que la promesa se 
haya resuelto correctamente y en caso de que ya hemos tenido problemas, 
entonces se manda llamar el caso de error y es rechazada.

                            RESUELTA
                         +------------+
                  +----> |  .then()   |---->+
                  |      +------------+     |
   PENDIENTE      |                         |         PENDIENTE
+-------------+   |                         |      +-------------+
|   PROMESA   |-->+                         +----> |   PROMESA   |
+-------------+   |                         |      +-------------+
                  |                         | 
                  |                         |
                  |     +------------+      |
                  +---->|  .catch()  |----->+
                        +------------+
                           RECHAZADA

Es decir, que tenemos dos caminos un camino en el cual la promesa, el código 
esperado se ejecutó correctamente y otro camino en el cual pudimos haber 
tenido un error, y mientras la promesa no haya terminado de ejecutar, su 
código se encuentra en estado dependiente. Una vez que haya terminado de 
ejecutar su código, pasa a dos estados, ya sea resuelto o rechazado para 
procesar el código. Cuando se ha resuelto una promesa, vamos a utilizar la 
función .THEN y para procesar la promesa.
En caso de que tengamos error, vamos a procesarlo con la función de .CATCH.
*/

// resolved    Aquí se recibe la función Resolver
// rejeted     Aquí se recibe la función Rechazar
// Declaramos una función flecha
// Para declarar una promesa declaramos un objeto del tipo Promise, con dos
// funciones como argumentos la primera para resolver y la segunda para 
// rechazar, estas funciones son funciones del tipo FLECHA
let miPromesa = new Promise( (resolver, rechazar) => {
      // inicializamos con true o false para simular resolver o rechazar
      let expresion = false;  
      if (expresion) { resolver('Resolvio correcto') }
      else { rechazar('Se produjo un ERROR') };
});


// Lo que hacemos es crear una promesa que envia dos funciones del tipo flecha
// las funciones son:

// (valor) => {console.log(valor)}  Funcion del parametro resolver
// (error) => {console.log(error)}  Funcion del parametro rechazar

// la misma función pero simplificada con los parentesis y llaves completas
// miPromesa.then( valor => console.log(valor), error => console.log(error) );

// FORMA 1. Con dos argumentos para resolver y rechazar
// miPromesa.then( (valor) => {console.log(valor)}, (error) => {console.log(error)} );

// FORMA 2. DEclarando .catch por fuera como método 
miPromesa.then( valor => console.log(valor)).catch(error => console.log(error));

