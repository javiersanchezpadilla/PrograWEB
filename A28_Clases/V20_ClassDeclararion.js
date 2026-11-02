/* CLASES EN JAVASCRIPT 

Los elementos conque va a contar una clase son:
1)  Nombre de la clase
2)  Atributos (caracteristicas)
3)  Métodos (comportamientos)

+---------------------+
|       Persona       |
+---------------------+
| nombre: string      |
| apellido: string    |
+---------------------+
|                     |
+---------------------+

A deferencia de las funciones, estas si permiten el HOISTING, en el caso de 
las clases no es permitido, loque quiere decir que primero se debe definir 
la clase y posteriormente se podrá usar.
*/


// Esto no es posible ya que las clases no permiten HOISTING
// Los objetos se deben definir después de haber declarado la clase NO ANTES

// let persona2 = new Persona('Karla', 'Velez');


// Creacion de una clase
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona = new Persona('Juan', 'Perez');
console.log(persona);
