/* USO DE PROTOTYPE

Se pueden crear atributos al vuelo, por ejemplo, se puede hacer lo siguiente

Creamos un objeto de nombre padre y al vuelo le asignamos un nuevo atributo
llamado telefono, importante!!!! este atributo al ser al vuelo solo existirá 
para el objeto padre:

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.telefono = '5454336678'   <<-- Nuevo atributo creado al vuelo para padre
console.log(padre.telefono);    <<-- el atributo SOLO EXISTE para padre

Creamos un atributo madre, pero recordar que el atributo telefono solo fue
definido para el objeto padre (no para este nuevo objeto madre)

let madre = new Persona('Karla', 'Sandoval', 'ksandoval@mail.com');
console.log(madre.telefono);    <<-- ERROR undefined (NO EXISTE PARA MADRE)

Para evitar esto y que al requerirse un nuevo atributo, este exista para todos
los objetos usamos la función PROTOTYPE

*/

function Persona(nombre, apellido, email){
    this.nombre = nombre;                   // atributo nombre
    this.apellido = apellido;               // atributo apellido
    this.email = email;                     // atributo email

    this.nombre_completo = function(){      // Definición de un método
        return this.nombre + ' ' + this.apellido;
    }
}

// Al crear el atributo mediante el método PROTOTYPE, automaticamente es
// creado para todos lo objetos simultaneamente
Persona.prototype.telefono = '1122334455'


// Creamos un objeto de nombre padre
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.telefono = '9988776655';              // Modificamo el valor para padre
console.log(padre.telefono);

let madre = new Persona('Karla', 'Sandoval', 'ksandoval@mail.com');
madre.telefono = '66775544';                // Modificamos el valor para madre
console.log(madre.telefono);
