/* MÉTODO CALL

El método call nos va a permitir llamar un metodo que esta definido en un 
objeto desde otro objeto.
AHORA VAMOS A PASAR ARGUMENTOS A LA LLAMADA DE LA FUNCIÓN
*/

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',

    // Preparamos nuestro método para aceptar argumentos, definiendo parametros
    //                       ▼▼▼▼▼▼  ▼▼▼▼▼▼▼▼
    nombreCompleto: function(titulo, telefono){
        return titulo + ':' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    }
}

let persona2 = {
    nombre: 'Karla',
    apellido: 'Sandoval'
}


// Imprimos los datos del objeto persona1
//                                  ▼▼▼▼▼  ▼▼▼▼▼▼▼▼▼▼▼ 
console.log(persona1.nombreCompleto('Lic', '9988776653'));

// Uso de Call para usor el método nombreCompleto que pertenece a persona1
// con los datos de persona2
//                                                 ▼▼▼▼▼▼  ▼▼▼▼▼▼▼▼▼▼▼▼
console.log(persona1.nombreCompleto.call(persona2, 'Ing.', '1122334455'));
