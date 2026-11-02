/* DEFINICIÓN DE ATRIBUTOS ESTATICOS (USO DE LA PALABRA STATIC)

Así como existen los métodos estaticos podemos crear atributos estáticos

*/

class Persona{

    // Definición de atributos estáticos, solo lo puede usar la clase
    static contador_objetos_persona = 0


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
let persona1 = new Persona('Karla', 'Rebolledo');

// No podemos hacer esto, ya que los métodos estaticos se asociam únicamente
// con las clases y no con los objetos, marcara ERROR
// persona1.saludar('Padre');

// Es correcto usar la clase con su método estatico
Persona.saludar('Padre');      

// Llamamos el método estatico con un objeto del tipo Persona
Persona.saludar2(persona1);

// Dado que el método tambien es heredado, lo podemos invocar desde
// la clase Empleado
Empleado.saludar();
Empleado.saludar2(empleado1);


// PARA EL USO DE LOS ATRIBUTOS ESTATICOS.

// Si intento usarlo como un atributo normal nos arrojara que NO ESTA DEFINIDO
// por lo tanto no es posible usarlo como un atributo normal del objeto.
// El atributo si existe pero no lo podemos usar desde los objetos, ya que son
// exclusivos de las clases
// console.log(persona1.contador_objetos_persona);

// Esto si es permitido: acceder al atributo desde la clase
// El valor es 2 ya que creó el objeto persona1 y empleado1
console.log(Persona.contador_objetos_persona);

// Tambien podemos acceder desde la clase hija sin problemas
console.log(Empleado.contador_objetos_persona);
