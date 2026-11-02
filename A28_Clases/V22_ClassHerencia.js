/* MANEJO DE HERENCIA EN LAS CLASES

Mediante la herencia podemos heredar caracteristicas desde una clase padre
hacia una clase hija, en este programa se declara una clase padre, una clase
hija y se maneja la herencia de atributos (caracteristicas) y métodos 
(comportamientos), tambien seguimos usando GETTERS y SETTERS.

Para creación de diagrmas UML en linea y gratis usar https://www.umletino.com/

+---------------------+                     +--------------------------+
|       Persona       |                     |         Empleado         |
+---------------------+                     +--------------------------+
| _nombre: string     |                     | _departamento: string    |
| _apellido: string   |     <<Extends>>     +--------------------------+
+---------------------+ <-------------------+ get departamento()       |
| get nombre()        |                     | set departamento(string) |
| set nombre(string)  |                     +--------------------------+
| get apellido()      |
| set apellido(sring) |
+---------------------+

*/

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Definimos el GETTER y SETTER para el atributo de _nombre
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        if (typeof nombre === 'string')     // Asigna si el param. es string
            {this._nombre = nombre;}
    }

    // Definimos el GETTER y SETTER para el atributo de _apellido
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        if (typeof apellido === 'string')     // Asigna si el param. es string
            {this._apellido = apellido;}
    }    

    //  Método común y corriente dentro de la clase
    nombre_completo(){
        return this.nombre + ' ' + this.apellido;
    }
}


class Empleado extends Persona {
    // La clase Empleado extiende funcionalidad de la clase padre Persona
    // Cuando tenemos clases padre, primero se deben llamar a los 
    // constructores de las clases PADRE antes de usar el operador THIS.

    constructor(nombre, apellido, departamento){
        super(nombre, apellido);        // Llama a constructor de la clase padre
        this._depto = departamento;
    }

    get departamento(){
        return this._depto;
    }

    set departamento(departamento){
        if (typeof departamento === 'string')     // Asigna si el param. es string
            {this._depto = departamento;}
    }        
}


let empleado1 = new Empleado('Juan', 'Perez', 'Contabilidad');
console.log(empleado1.nombre);
console.log(empleado1.apellido);
console.log(empleado1.departamento);
console.log(empleado1.nombre_completo());

// Está es una manera de imprimir el nombre completo con el departamento
console.log(empleado1.nombre_completo() + ' Departamento: ' + empleado1.departamento);
