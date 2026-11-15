/* FUNCIONES DEL TIPO  SETTIMEOUT

Aunque parece que lo que hemos trabajado hasta el momento podría resolverse, 
simplemente mandanos llamar una función de manera normal, el objetivo de las 
funciones de tipo CALLBACK es que puedan ser utilizadas para procesos que se 
ejecutan de manera asíncrona, Cuando estamos hablando de procesos sincronos, 
quiere decir que se ejecuta una línea a la vez, por lo que se ejecuta la linea
1 luego la linea 2, y así sucecivamente una a una. Sin embargo, cuando estamos 
tratando con funciones de tipo CALLBACK, lo que vamos a hacer, por ejemplo,
en este ejemplo es mandar a llamar la función sumar y posteriormente dentro de 
este método, mandar a llamar la función de tipo CALLBACK y entonces esta 
llamada va a establecer un nuevo flujo. Es decir, que se va a realizar un 
proceso por separado, mientras la función de sumar puede seguir trabajando.
Así que el objetivo de utilizar funciones de tipo CALLBACK no solamente para 
realizar procesos sincronos, es decir, que se ejecute línea a línea, sino que 
ahora vamos a poder ejecutar varios procesos por separado y esto se le conoce 
como procesos ASÍNCRONOS.

EN ESTE EJEMPLO SE ROMPE EL CICLO DE EJEUCIÓN SINCRONO, YA QUE EJECUTA EN
EL SIGUIENTE ORDEN

Saludo sincrono 02              <-- Ejecuta de manera secuencial
Saludo sincrono 01              <-- Ejecuta de manera secuencial
Saludo asincrono 3 (1 seg)      <-- Ejecuta de manera ASINCRONA
Saludo asincrono 2 (2 segs)     <-- Ejecuta de manera ASINCRONA
Saludo asincrono 1 (3 segs)     <-- Ejecuta de manera ASINCRONA

*/

function miFuncion01(){
    console.log('Saludo sincrono 01');
}

function miFuncion02(){
    console.log('Saludo sincrono 02')
}

// Las funciones se ejecutan de manera secuencial, en este caso primero
// se ejecuta la funcion02() y posteriormente la funcion01()
miFuncion02();
miFuncion01();


/*
vemos que nos manda el mensaje saludo asíncrono, después de tres segundos, 
esto quiere decir que entonces el flujo de trabajo ya no es como lo vimos
en un inicio que era secuencial.
En este caso primero se ejecuta la función 2, después la función 1, etc. y no 
se puede ejecutar la función 1 hasta que termine de trabajar la función 2, en 
el caso de las funciones de tipo Kovak o las llamadas asíncronas, esto no 
sucede así, podemos tener varios procesos que se están ejecutando en paralelo 
y entonces en este caso estamos utilizando la función setTimeout para que se 
ejecute otro proceso una vez que pasen 3 segundos. Así que parece que aunque 
ya terminó nuestro programa, después de los 3 segundos se manda a llamar esta
función y se manda a consola este mensaje, así que es un ejemplo de procesos 
asíncronos.
*/

// EJEMPLO 01 
// Llamadas asincrona con uso setTimeout
function miFuncionCallBack(){
    console.log('Saludo asincrono 1 (3 segs)');
}

// Recibe dos argumentos:
// Nombre de la función CallBack
// Tiempo de milisegundos para su ejecución 3000 = 3 segs.
setTimeout(miFuncionCallBack, 3000)



// EJEMPLO 02. 
// Tambien podemos mandar como argumenro la función directamente
// aqyí vemos que está funcion se ejecuta primero que la función anterior
setTimeout(function(){console.log('Saludo asincrono 2 (2 segs)')}, 2000);



// EJEMPLO 03. declarar una función flecha (es mas eficiente y simplificado)
setTimeout( () => console.log('Saludo asincrono 03 (1 seg)'), 1000);