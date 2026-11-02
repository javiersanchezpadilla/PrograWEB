/* MANEJO DE SOBRE ESCRITURA DE MÉTODOS HEREDADOS

+---------------------+                     +--------------------------+
|       Persona       |                     |         Empleado         |
+---------------------+                     +--------------------------+
| _nombre: string     |                     | _depto: string           |
| _apellido: string   |     <<Extends>>     +--------------------------+
+---------------------+ <-------------------+ get departamento()       |
| get nombre()        |                     | set departamento(string) |
| set nombre(string)  |                     +--------------------------+
| get apellido()      |
| set apellido(sring) |
| nombre_completo()   |  <<< solo puede ver _nombre y _apellido debido
+---------------------+      a que solo esos atributos existen en la clase
                             padre pero ahora se requiere el departamento

Hasta el momento ya hemos agregado un método en la clase padre llamado 
nombre_completo(), que permite mostrar los atributos de nombre y apellido, 
que son los atributos que pertenecen a la clase padre y lo podemos acceder 
desde la clase hija, esto quiee decir que estamos heredando este método y lo 
estamos utilizando directamente a través de la variable que apunta a un objeto 
de la clase hija, sin embargo, este objeto de empleado, como ya sabemos, 
contiene más información que simplemente el nombre y el apellido, aquí nos 
falta el nombre del departamento. pero entonce ¿cómo podemos agregar este 
atributo de departamento desde el objeto creado de la clase hija?
Para ello tenemos que aplicar el concepto que se conoce como sobre escritura y 
básicamente significa lo siguiente: En la clase padre, en la clase de persona 
hemos definido el método nombre_completo(), pero debido a que la clase padre 
únicamente conoce los atributos de nombre y apellido, el método de 
nombre_completo() solamente puede trabajar con esos atributos (nombre y 
apellido) PERO DESCONOCE POR COMPLETO EL ATRIBUTO DE DEPARTAMENTO, ya que ese 
atributo pertenece a la clase hija.
Para ello, vamos a aplicar el concepto de SOBRE ESCRITURA, esto quiere decir 
que desde la clase hija vamos a modificar el comportamiento definido en el 
método de la clase padre y eso se debe a que el método de la clase padre no 
está completo desde el punto de vista de la clase hija debido a que le falta 
el atributo de departamento, al aplicar el concepto de sobre escritura se va a
modificar el comportamiento definido del método de la clase padre.
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

    //  Método común y corriente dentro de la clase padre, pero por su
    // alcance solo puede acceder a los atributos de _nombre y _apellido
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

    // SOBRE ESRCITURA DEL MÉTODO de la clase padre
    nombre_completo(){

        // FORMA 1. Repitiendo los mismos valores usados en la clase padre
        // return this.nombre + ' ' + this.apellido + ' ' + this.departamento;

        // FORMA 2. Retutilizando el método padre para no repetir atributos
        return super.nombre_completo() + ' ' + this._depto;
    }
}


let empleado1 = new Empleado('Juan', 'Perez', 'Contabilidad');

console.log(empleado1.nombre_completo());
