/* MÉTODO APPLY

El método apply al igual que el método call nos va a permitir llamar un metodo 
que esta definido en un objeto desde otro objeto.
AHORA VAMOS A PASAR ARGUMENTOS A LA LLAMADA DE LA FUNCIÓN.
La diferencia de apply con CALL, es que cuando hacemos uso de argumentos, estos
se llaman desde un arreglo y no uno a uno dentro de la llamada
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

// Uso de apply para usor el método nombreCompleto que pertenece a persona1
// con los datos de persona2
// Debido a que vamos a usar APPPLY lo que cambia es la manera de indicar los
// argumentos, ahora deben colocarse dentro de un arreglo, donde se escribiran
// cada uno de los argumentos (todos)
//  ▼▼▼▼▼▼▼▼▼▼
let mi_arreglo = ['Ing', '74412334544']         //  ▼▼▼▼▼▼▼▼▼▼
console.log(persona1.nombreCompleto.apply(persona2, mi_arreglo));

// Tambien podemos colocar el arreglo completo dentro de la llamada
//                                                  ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
console.log(persona1.nombreCompleto.apply(persona2, ['Doc', '555269098']));
