/* MÉTODO APPLY

El método apply al igual que el método call nos va a permitir llamar un metodo 
que esta definido en un objeto desde otro objeto.
PRIMERO CON EJEMPLO SIMPLE SIN ARGUMENTOS MEDIANTE EL USO DE APPLY.
El funcionamiento es identico al uso de CALL
*/

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',

    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Karla',
    apellido: 'Sandoval'
}


// Imprimos los datos del objeto persona1
console.log(persona1.nombreCompleto());

// Uso de APPLY para usar el método nombreCompleto que pertenece a persona1
// con los datos de persona2        ▼▼▼▼▼
console.log(persona1.nombreCompleto.apply(persona2));
