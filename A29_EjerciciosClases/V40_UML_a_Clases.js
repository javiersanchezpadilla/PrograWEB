/* EJERCICIO DE HERENCIA CREACIÓN DEL SIGUIENTE DIAGRAMA DE CLASES UML

Realizar el siguiente ejercicio, vamos a usar un objeto del tipo Date
let la_fecha = new Date();

AL FINAL COMO NO PODEMOS INTEGRAR LOS MÓDULOS, YA QUE SE REQUIERE DE UN
SERVIDOR, SE VA A JUNTAR TODO EN UN SOLO PROGRAMA, MAS ADELANTE SE VERÁ
COMO HACERLO Y SEPARLO EN MÓDULOS.

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

EN ESTE EJEMPLO SE IMPLEMENTA EL USO DE TEMPLATE STRING
*/          


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
        // respeta espacios, tabulaciones y saltos de linea es como f-string
        return `${this._id_persona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
} 


class Empleado extends Persona {

    static contador_empleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._id_empleado = ++Empleado.contador_empleados;
        this._sueldo = sueldo;
    }

    get id_empleado(){
        return this._id_empleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        // return super.toString() + ' ' + this._id_empleado + ' ' + this._sueldo;
        // Podemos usar un template string
        return `${super.toString()} ${this._id_empleado} ${this._sueldo}`;
    }
}


class Cliente extends Persona {

    static contador_clientes = 0;

    constructor(nombre, apellido, edad, fecha_registro){
        super(nombre, apellido, edad);
        this._id_cliente = ++Cliente.contador_clientes;
        this._fecha_registro = fecha_registro;
    }

    get id_cliente(){
        return this._id_cliente;
    }

    get fecha_registro(){
        return this._fecha_registro;
    }

    set fecha_registro(fecha_registro){
        this._fecha_registro = fecha_registro;
    }

    toString(){
        return super.toString() + ' ' + this._id_cliente + ' ' + this._fecha_registro;
        // Para convertir en template string bastaria dejarlo de la siguiente forma
        // return ` ${super.toString()} ${this._id_cliente} ${this._fecha_registro}`;

    }
}


// Prueba clase Persona
let persona1 = new Persona('Juan', 'Perez', 35);
let persona2 = new Persona('Karla', 'Guevara', 19);

console.log(persona1.toString());
console.log(persona2.toString());


// Pruebas de la clase Empleado
let empleado1 = new Empleado('Alberto', 'Hernandez', 62, 25000);
let empleado2 = new Empleado('Elvia', 'Montero', 22, 15000);

console.log(empleado1.toString());
console.log(empleado2.toString());


// Prunas de la clase cliente, creamos objetos del tipo DATE()
let cliente1 = new Cliente('Leticia', 'Jimenez', 42, new Date());
let cliente2 = new Cliente('Gabriela', 'Acosta', 52, new Date());

console.log(cliente1.toString());
console.log(cliente2.toString());
