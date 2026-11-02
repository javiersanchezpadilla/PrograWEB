/* GETTERS Y SETTERS EN JAVASCRIPT 

Para poder referenciar los atributos de manera natural, esto se lleva a cabo
primero protegiendo nuestros atributos, ejemplo
    this._nombre = nombre;

El argumento que lo inicia se llama nombre, pero el atributo dentro de la 
clase esta protegido para evitar que el programador pueda accder de forma 
directa a el intentando modificarlo directamente, ¿por que usamos GETTERS?
Para acceder a los valores de las propiedades pero de forma indirecta, además
Podemos hacer cambios o aplicar métodos a los atributos antes de obtenerlos.

En el caso del SET (SETTERS) sirve para evitar errores al asignar valores a 
los atributos, esto es, suponr que en nombre asignamos un correo  o un 
numero telefonico, lo que vamos a hacer es crear una validación antes de que 
el valor se asignado al atributo real.
Ver mis apuntes de Python para mayor explicación y detalle del tema.
De esta forma accedemos a la propiedad de nombre pero de forma indirecta

+---------------------+
|       Persona       |
+---------------------+
| _nombre: string     |
| _apellido: string   |
+---------------------+
| get nombre()        |
| set nombre(string)  |
+---------------------+ 

*/

// Creacion de una clase
class Persona{
    // Los atributos de la clase estan protegidos por lo tanto no se puede
    // acceder de forma directa a ellos (guin bajo es el indicador de que
    // El atributo esta protegido)
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        // De forma indirecta a traves de nombre accedemos al atributo real
        // que es _nombre
        return this._nombre;
    }

    set nombre(nombre){
        // Nos va a permitir modificar el atributo protegido _nombre
        // de forma indirecta a traves del parametro nombre, esto es útil
        // para podr hacer validaciones antes de hacer la asignación del valor
        // en el atributo de la clase
        console.log(typeof(nombre));
        if (typeof nombre === 'string')     // Asigna si el param. es string
            {this._nombre = nombre;}
    }
}


let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Javier';
console.log(persona1.nombre);
// Intentamos asignar un valor numérico al nombre
persona1.nombre = 2333;
console.log(persona1.nombre);
