/* FUNCIONES FLECHA (funciones anonimas)

LAs funciones normales soportan HOISTING.
Las funciones flecha NO SOPORTAN HOINSTING, ya que al definir una variable
con hoisting no podemos mandar a llamarla antes de su definición
Lo común es declarar las funciones del tipo flecha mediante la palabra
CONST ya que una vez declaradas no podremos modificarlas.

[ CONST | LET]    nombreFuncion   = (  )     =>      { cuerpo de la función }
       ▲                ▲             ▲       ▲                 ▲
       |                |             |       |                 |
Tipo --+                |             |       |                 |
Nombre de la funcion ---+             |       |                 |
Definición de los parámetros ---------+       |                 |
Indicador de que se trata de una funcion flecha                 |
Cuerpo de las instrucciones a desarrollar por parte de la función
*/

function mi_funcion(){
    console.log("Saludos desde mi función")
}


let mi_funcion_flecha_variable = () => {
    console.log("Saludos desde mi función fecla LET")
}


const mi_funcion_flecha_constante = () => {
    console.log("Saludos desde mi función fecla CONST")
}


mi_funcion();
mi_funcion_flecha_variable();
mi_funcion_flecha_constante();