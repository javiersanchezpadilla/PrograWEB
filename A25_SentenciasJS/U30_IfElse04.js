/* EJERCICIO PARA EL USO DE IF ELSE.

Determinar el saludo con base a la hora
    06am - 11am  Buenos días
    12pm - 18pm  Buenas tardes
    19pm - 24am  Buenas noches
    00am - 06am  Durmiendo
*/

let hora_del_dia = 19;
let mensaje;

if (hora_del_dia >= 6 && hora_del_dia <= 11) {
    mensaje = "Buenos días";
    }
   else if (hora_del_dia >= 12 && hora_del_dia <= 18) {
        mensaje = "Buenas tardes";
           }
        else if (hora_del_dia >= 19 && hora_del_dia <= 24) {
            mensaje = "Buenas noches";
               }
            else if (hora_del_dia >= 0 && hora_del_dia < 6) {
                mensaje = "Durmiendo";
                     }
                    else { mensaje = "Valor incorrecto"; }
                    
console.log(mensaje)                     