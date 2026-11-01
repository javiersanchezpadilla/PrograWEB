/* AGREGAR MÉTODOS A UN MÉTODO CONSTRUCTOR DE OBJETOS. */

// creamos una funcion para los nuevos objetos que queremos crear
// vamos apoder crear varios objetos
function Persona(nombre, apellido, email){
    this.nombre = nombre;                   // atributo nombre
    this.apellido = apellido;               // atributo apellido
    this.email = email;                     // atributo email

    this.nombre_completo = function(){      // Definición de un método
        return this.nombre + ' ' + this.apellido;
    }
}


// Creamos un objeto de nombre padre
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre)

// Invocamos el método
console.log(padre.nombre_completo());
