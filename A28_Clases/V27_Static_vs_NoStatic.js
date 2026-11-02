/* ARGUMENTOS ESTATICOS CONTRA ARGUMNTOS NO ESTATICOS.

Así como existen los métodos estaticos podemos crear atributos estáticos y 
además atributos NO ESTICOS, para recapitular

DEFINICIÓN DE UN ATRIBUTO ESTATICO. 
-----------------------------------
Solo pueden ser accedidos medante la clase.
    static contador = 0;    

DEFINICIÓN DE UN ATRIBUTO NO ESTÁTICO.
--------------------------------------
En este caso si lo pueden acceder los objetos.
    correo = 'generico@generico.com';

Recordar que estas definiciones son antes del constructor

*/

class Persona{

    // Definición de atributos estáticos y no estáticos
    // Atributo estatico es exclusivo de nuestra clase
    static contador_objetos_persona = 0
    // atributo no estatico pertenece a nuestros objetos
    email_generico = 'correo@generico.com';

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // los atributos estaticos solo se deben acceder desde la clase 
        // por esa razon no usa el operador THIS.
        Persona.contador_objetos_persona++;
        console.log('Se incrementa el contador en ' + Persona.contador_objetos_persona);
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
        return this.nombre + ' ' + this.apellido;
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


let empleado1 = new Empleado('Juan', 'Perez', 'Contabilidad');
let empleado2 = new Empleado('Roberto', 'Cardenas', 'Programador')
let persona1 = new Persona('Karla', 'Rebolledo');

// PARA EL USO DE LOS ATRIBUTOS ESTATICOS.
// ---------------------------------------
console.log(Persona.contador_objetos_persona);

// Tambien podemos acceder desde la clase hija sin problemas
console.log(Empleado.contador_objetos_persona);

// PARA EL USO DE LOS ATRIBUTOS NO ESTATICOS.
// Podemos usarlo desde los objetos del tipo Persona
console.log(persona1.email_generico);

// Podemos usarlo desde subclases hijas
console.log(empleado1.email_generico);

// Pero NO PODEMOS USARLO desde la clase misma (ni la clase padre ni hija)
// Lo que se obtendrá es un valor indefinido
console.log(Persona.email_generico);
console.log(Empleado.email_generico);

// MUY IMPORTANTE!!, si modificamos un atributo no estatico solo
// afectará al objeto que lo modificó, no es una constante que 
// pueda afectar a todos los objetos creados, al final funciona
// como si fuera un atributo mas que corresponda al objeto sin mezclar
// sus valores entre si
empleado1.email_generico = 'nuevo_correo@generico,con'
console.log(empleado1.email_generico);
console.log(persona1.email_generico);
console.log(empleado2.email_generico);
