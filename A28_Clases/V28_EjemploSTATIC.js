/* ARGUMENTOS ESTATICOS CONTRA ARGUMENTOS NO ESTATICOS.

En este ejemplo vamos a crear una clase que contenga un atributo estatico
el cual llevara el conteo de los objetos creados y además se asgignará a un
atributo de clase llamado id_empleado el valor correspondiente al número de
objeto creado
*/

class Persona{

    static contador_objetos = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.id_persona = ++Persona.contador_objetos;
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

    nombre_completo(){
        return this.id_persona + ' ' + this.nombre + ' ' + this.apellido;
    }

    toString(){
        return this.nombre_completo();
    }        

    // Definimos el método ESTATICO (STATIC)
    // Este método es exclusivo de la clase, no lo pueden llamar los objetos
    static saludar(){
        console.log('Saludos desde el método ESTATICO');
    }

    // Los métodos estaticos si pueden recibir como parametros otros 
    // objetos
    static saludar2(recibe_objeto){

        console.log(recibe_objeto.nombre);
        console.log(recibe_objeto.apellido);
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

    // Sobre esrcitura del método nombre_completo() de la clase padre Persona
    nombre_completo(){
        return super.nombre_completo() + ' ' + this._depto;
    }
}


// Creación de objetos
let persona1 = new Persona('Karla', 'Rebolledo');
let empleado1 = new Empleado('Juan', 'Perez', 'Contabilidad');
let empleado2 = new Empleado('Roberto', 'Cardenas', 'Programador')
let empleado3 = new Empleado('Emma', 'Robledo', 'Auxiliar Carrera')

// VErificamos el nuevo atributo id_empleado
console.log(persona1.toString()) ;  // 1 Karla 
console.log(empleado1.toString());  // 2 Juan Perez Contabilidad
console.log(empleado2.toString());  // 3 Roberto Cardenas Programador
console.log(empleado3.toString());  // 4 Emma Robledo Auxiliar Carrera

// Verificamos el contenido de la variable estática
console.log(Persona.contador_objetos);
