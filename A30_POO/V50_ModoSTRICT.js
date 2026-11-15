/* MANEJO DEL MODO STRINCT EN JAVADCRIPT

SALTAR ESTE EJEMPLO YA QUE EN LA NUEVA VERSIÓN DE JAVASCRIPT NO FUNCIONA
-------------------------------------------------------------------------
Si empezamos a utilizar una variable sin haberla declarado, JavaScript no nos 
va a indicar ningún error, sin embargo, existe el modo estricto en JavaScript 
para evitar este tipo de prácticas, ya que se consideran malas prácticas, 
sobretodo cuando trabajamos en proyectos grandes.
Así que simplemente con agregar lo siguiente la cadena "USE STRICT", con eso 
estamos agregando al modo estricto en esos programas de JavaScript no es 
necesario agregarlo, pero puede ser una buena práctica y sobretodo para 
encontrar algunos errores dentro de nuestro código.
Así que podemos agregar esta cadena y posteriormente, si tratamos de utilizar 
una variable sin haberla declarado e intentamos comenzar a utilizar nuestra 
variable y queremos mandarla a consola, veremos que se mandará el mensaje de
que la variable no está definida, así que de esta manera, al utilizar en modo 
estricto, no podemos utilizar una variable que no ha sido declarada anteriormente.
LET VAR CONST son permitidas

Se debe declarar como primer linea en nuestro programa o al inicio de 
una funcion()

*/
"use strict";       // Habilia el modo strincto

z = 10;
y = 20;
console.log(x);

