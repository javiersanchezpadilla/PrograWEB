/* DEFINICIÓN DE MÉTODOS ESTATICOS (USO DE LA PALBRA STATIC)

Ya hemos definido nuestra clase, podemos agregar no solamente métodos que se 
asocien con nuestros objetos, sino que también podemos agregar MÉTODOS QUE SE 
ASOCIEN CON NUESTRA CLASE EXCLUSIVAMENTE y para ello vamos a utilizar la 
palabra reservada STATIC, vamos a agregar un método estático y vamos a ver 
cómo funciona este concepto.
Lo primero que tenemos que poner es STATIC para definir que este va a ser un 
método estático, es decir, EXCLUSIVO DE LA CLASE, que se va a asociar con 
nuestra clase Y NO CON LOS OBJETOS QUE SE CREEN DE ESTA CLASE.
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
