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
| nombre_completo()   |  
+---------------------+ 
                        
Cuando declaramos una clase:
    class Persona
    class Empleado extends Persona

Cuando no declaramos de manera explicita EXTENDS, de manera autómatica 
extiende o hereda de la clase OBJETC, OBJECT es la clase padre de todas las
clases en JavaScript
    class Persona extends Object

Y la clase Object contiene varios métodos, de momento vamos a ver un método 
que se llama ToString() este método nos va a permitir mandar a imprimir 
información del estado del objeto, es decir, los valores actuales de cada uno 
de los atributos de nuestro objeto, este método ToString() va a ser muy 
importante para la definición de nuestras clases, ya que es buena práctica 
agregar este método en la definición de nuestras clases, sin embargo, hay un 
detalle cuando estamos trabajando con la clase Object, existen métodos que 
tenemos directamente en la clase Object o existen métodos también que están 
definidos en el atributo de Prototype

    Object.prototype. [toString(), toLocateString(), constructur(), etc.]

Y podemos observar que uno de estos métodos definidos en Object.prototype es el 
método toString(), que es precisamente el método que vamos a trabajar, si 
recordamos la palabra prototype nos permite agregar atributos o métodos de 
manera dinámica a nuestras clases, como vimos anteriormente.
Así que cuando estamos trabajando con nuestras clases, también vamos a heredar 
las características de la clase Object, ya que todas las clases en JavaScript, 
si no lo indican, heredan de manera automática de la clase Object incluyendo 
prototype y los métodos relacionados a este objeto. Así que en este caso ya 
estamos heredando de manera automática el método ToString()

ESTE TEMA ES LO MISMO QUE EL MÉTODO __str__(), LO VAMOS A SOBREESCRIBIR

Lo que vamos a hacer es sobreescribir el comportamiento del método String 
heredado de la clase Object.prototype y para ello vamos a hacer lo siguiente
Ya estudiamos cómo sobreescribir un método, simplemente es volver a agregar la 
firma del método y cambiar el comportamiento, es decir, agregar nuestro nuevo 
código para ello dentro de la clase de persona (que es el la clase padre) y 
vamos a sobreescribir el método toString() de la clase padre, con eso estamos 
escribiendo el método heredado de la clase Object.prototype() y vamos a 
regresar una cadena, vamos a utilizar el mismo código del método 
nombre_completo() simplemente vamos a imprimir los atributos de nombre y 
apellido de clase padre, al momento de sobreescribir el metodo toString() para
no reescribir todo de nuevo simplemente llamamos al metodo nombre_completo(), 
pero la pregunta es ¿cuál es el método que se ejecuta? el de la clase padre o 
el método de la clase hija?
Se asume que el último método definido bajo la herencia es quien determina el 
funcionamiento del método ya que es la última versión sobreescrita

Class Persona               <-- Clase padre

    nombre_completo(){ }    <-- método para imprimir el nombre y el apellido

    toString(){             <-- reemplaza la impresión de solo [object Object]
        nombre_completo() }
        ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲


class Empleado extends Persona {    <-- Hereda de la clase padre Persona

    nombre_completo() {}    <-- Al ser la última definición del método es 
    ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲           sobreescribe el comportamiento general 
                                esto se llama POLIMORFISMO que significa
                                multiples formas en tiempo de ejecución
                                el concepto aplica en los archivos CSS
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

    // Sobre esrcitura del método toString() de la clase padre OBJECT 
    // aquí la pregunta es ¿a que método nombre_completo() llamará?
    toString(){
        return this.nombre_completo();
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

// Cuando hago esto:        CONSOLE.LOG(EMPLEADO1);
// se manda a imprimir la información del objeto, sin embargo en un navegador 
// WEB la información no se va a visualizar así, lo que vamos a visualizar 
// es: [OBJECT OBJECT], realmente lo que permite que se muestre esa 
// información es el método toString(), para modificar su comportamiento lo 
// que vamos a hacer simplemente es sobreescribirlo para que entonces podamos 
// ver la información que realmente no interesa (es como __str__() de python)

// Esta linea manda a imprimir la imformación del objeto 
// Empleado { _nombre: 'Juan', _apellido: 'Perez', _depto: 'Contabilidad' }
// pero recordar que dentro de JavaScript porque en el navegador WEB no lo hará
// Solamente imprimira {object: Object}
console.log(empleado1);

// Para corregir lo anterior sobreescribimos el métoso toString()
// como vemos ejecuta el método de la clase hija (polimorfismo)
console.log(empleado1.toString());

// Aqui ejecuta el méetodo de la clase padre debido a que no depende la clae
// Persona de ninguna otra clase (no es hija de otra clase o no es una 
// subclase)
let persona1 = new Persona('Karla', 'Rebolledo');
console.log(persona1.nombre_completo());
