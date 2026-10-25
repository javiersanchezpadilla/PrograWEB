/* FUNCIONES, PASO POR REFERENCIA 

El paso por referencia es cuando enviamos el valor de la dirección 
de memoria del objeto, si cambiamos el valor autómaticamente cambia
cuando regresamos desde la función

*/

// Creamos un objeto que crea sus elementos por rerefencia
const Persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 35
}

// Definimos un método que permita cambiar un dato tipo objeto
// el acceso a los valores será por referencia, esto es, a las 
// direcciones de memoria, por lo que todo lo que cambie dentro de
// la ejecución de la función afecta directamente a la clase original
function CambiarValorObjeto(que_objeto){
    que_objeto.nombre = "Karla";
    que_objeto.apellido = "Sánchez";
    que_objeto.edad = 40;
}


CambiarValorObjeto(Persona);
console.log(Persona);
