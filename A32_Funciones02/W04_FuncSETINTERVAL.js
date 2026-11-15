/* FUNCION SETINTERVAL

En el proceso sincrono hay tiempos de espera mayores, debido que al ser la 
ejecución paso a paso debe esperar liberación de ejecución para poder pasar
a otro proceso, mientras que en el proceso asincrono se procesan tareas en 
paralelo permitiendo realizar mas rapido los procesos.

            PROCESO SINCRONO                         PROCESO ASINCRONO
            ================                         =================

        +---------+     +----------+            +---------+     +----------+
        | Cliente |     | Servidor |            | Cliente |     | Servidor |
        +---------+     +----------+            +---------+     +----------+
            |               |                       |               |
            |               |                       |               |
            █ Funcion 1     |Funcion 2              █ Funcion 1     |Funcion 2
Make        █-------------->|                Make   █-------------->|
request     |  →   →   →    █              request  █               █
            |               █                       █  ↓        ↓   █
Esperando   |            ↓  █           CONTINUA    █               █
por         |               █           TRABAJANDO  █  ↓        ↓   █
respuesta   |            ↓  █                       █               █
            | Funcion 1 ←   █                       █  ↓    ←   ↓   █
            |<--------------+           OBTIENE     █<--------------+
            █  ↓            |           RESPUESTA   █  ↓            |
            █               |           E HIZO      █               |
            |  ↓            |           ALGO MAS    |  ↓            |

PROCESO SINCRONO:
=================
Lo que hemos visto hasta el momento es que obtenemos dos opciones para 
trabajar nuestros programas tenemos llamadas asíncronas, en la cual, en primer 
lugar hacemos una llamada.
Por ejemplo, imaginemos que tenemos un cliente y un servidor, el cliente hace 
una primera llamada hacia el servidor, en este caso puede ser, por ejemplo, 
una función como lo hemos venido trabajando y esta función tarda cierto 
tiempo.
Sin embargo, todo el tiempo que tarda esta función, la primer función que hizo 
la llamada no puede realizar ninguna otra tarea, así que todo esto es tiempo 
perdido para la primer función que hizo la llamada hacia la segunda función, es 
decir que en este momento la primer función hace la llamada hacia la función 2, 
la función 2 tiene que terminar de ejecutarse y hasta que termine de ejecutarse
regresa la llamada hacia la función 1 y posteriormente la función 1 puede 
seguir con su proceso hasta terminar su tarea a esto se le conoce como proceso
asíncrono.

PROCESO ASINCRONO:
==================
El proceso asíncrono, como hemos venido estudiando con funciones de tipo 
CALLBACK Lo que sucede es que la función 1 hace una llamada hacia la 
función 2, es decir, la función de tipo CALLBACK, pero la función 1 puede 
seguir realizando tareas, así que tanto la función 1 como la función 2 pueden 
seguir trabajando y una vez que termine la función 2 subproceso, entonces 
regresa la respuesta hacia la función 1. En caso de que sea necesario y 
continúa el flujo, esta función 1 hasta terminar. Así que de esta manera 
podemos aprovechar mejor el proceso.
Ambas funciones están trabajando por separado y a esto se le conoce como proceso 
asíncrono, ya que ambas funciones están trabajando por separado.

La funcion del tipo setInterval es parecida a la del tipo SetTimeOut
pero la diferencia es que se va a llamar nuevamente cada cierto tiempo
*/

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}


// con SetIntreval la vamos a llamar cada segundo
setInterval(reloj, 1000);
