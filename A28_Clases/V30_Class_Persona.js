/* EJERCICIO DE HERENCIA CREACIÓN DE LA CLASE PERSONA

Realizar el siguiente ejercicio, vamos a usar un objeto del tipo Date
let la_fecha = new Date();

|||||||||||||||||||||||
▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
+---------------------+                     +---------------------+
|       Persona       |                     |       Empleado      |
+---------------------+                     +---------------------+
| _id_persona: number |                     | _id_empleado: Long  | 
| _nombre: string     |    << Extends >>    | _sueldo: number     | 
| _apellido: string   | <------------------ +---------------------+
| _edad: number       |                     | get_id_empleado()   |
| contador_personas   |                     | get_sueldo()        |
+---------------------+                     | set_sueldo()        |
| get_id_persona()    |                     | toString()          |
| get_nombre()        |                     +---------------------+
| set_nombre()        |
| get_apellido        |                     +---------------------------+
| set_apellido()      |    << Extends >>    |          Cliente          |
| set_edad()          | <------------------ +---------------------------+
| set_edad()          |                     | _id_cliente(): number     |
| toString()          |                     | _fecha_regisro: Date      |
+---------------------+                     +---------------------------+
                                            | get_id_cliente()          |
                                            | get_fecha_registro()      |
                                            | set_fecha_registro(Date)  |
                                            | toString()                |
                                            +---------------------------+
*/          

// 1. Creamos la clase Persona
class Persona {

    static contador_personas = 0;

    constructor(nombre, apellido, edad){
        this._id_persona = ++Persona.contador_personas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get id_persona(){
        return this._id_persona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        // return this._id_persona + ' ' + this._nombre + ' ' + 
        //        this._apellido + ' ' + this._edad;
        // Podemos usar un Template String (es mas facil manipular cadenas)
        return `${this._id_persona} 
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }
} 
