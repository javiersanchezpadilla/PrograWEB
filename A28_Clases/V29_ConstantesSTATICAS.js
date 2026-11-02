/* CREACIÓN DE CONSTANTES ESTATICAS. (SIMULACIÓN PARA RESOLVER ESTA SITUACIÓN)

VAMOS A SIMULAR LA CREACIÓN DE UNA CONSTANTE ESTÁTICA (realmente no existen)
Ahora vamos a crear constantes del tipo ESTATICO, para ello vamos a crear un
método del tipo estático tipo GET para obener un valor, como no vamos a 
definir un método SET no se moficiará absolutamente nada, además al no existir
un atributo no hay nada que modificar
*/

class Persona{

    static contador_objetos = 0;

    // Aquí vamos a simular una constante llamada MAX_OBJ, realmente lo que
    // solo hace el método es regresar un valor de cinco (5), pero si 
    // intentamos mo dificarlo, al no haber método SET no se puede modificar
    // nada debido a que MAX_OBJ no existe como atributo (solo es una trampa)
    // sin embargo permite simular una costante 
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contador_objetos < Persona.MAX_OBJ) {
            this.id_persona = ++Persona.contador_objetos;
        } 
        else {
            console.log('Se han superado el máximo de objetos permitidos');
        }
        
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

// USO DE LA CONSTANTE ESTÁTICA
// -----------------------------
// como se declaró un método GET no se requiere el uso de parentesis MAX_OBJ()
console.log(Persona.MAX_OBJ);

// Si intentamos modificar el valor, al no contar con método SET no aplica 
// el cambio, sigue con el mismo valor de retorno, recordar que no exite el 
// atributo MAX_OBJ
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);
