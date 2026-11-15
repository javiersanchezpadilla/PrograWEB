/* POLIMORFISMO

+--------------------+              +--------------------+
|      Empleado      |              |     Gerentedo      |
+--------------------+              +--------------------+
| nombre: string     | <----------- | obtener_detalles() |
| sueldo:number      |              +--------------------+
+--------------------+              
| obtener_detalles() |               
+--------------------+              

Vamos a quitar la impresión de estos objetos, Ya no vamos a mandar a llamar 
el método obtener detalles, ahora lo que vamos a hacer es que vamos a definir 
un nuevo método que se va a llamar imprimir(), la cual va a ser una función 
que se va a encargar a mandar a llamar el método fuera de las dos clases.
Así que es un método independiente, y en este método lo que vamos a hacer es 
que vamos a recibir una variable, la nombraremos "cualquier_tipo", para saber 
que Simplemente estamos recibiendo una variable y posteriormente con esta 
variable lo que vamos a hacer es acceder al método, obtener detalles, es aquí 
es donde va a estar lo interesante, ya que vamos a pasar diferentes tipos a 
este método para mandar a llamar este método, obtener detalles y vamos a ver 
cómo dependiendo del tipo que proporcionemos, va a ser el método que se va a 
mandar a ejecutar.
Así que si pasamos el tipo de la clase padre se va a ejecutar el método 
obtener detalles de la clase padre.
Pero si pasamos un tipo que apunta a un objeto de tipo gerente, entonces el 
método que se ejecuta es el método de la clase hija.
El método sobrescrito en la clase hija llamado obtener detalles, aesto se le 
va a conocer como polimorfismo, ya que solamente una línea de código puede 
ejecutar el método de la clase padre o de la clase hija, ya que polimorfismo 
significa múltiples formas.
En este caso, múltiples formas sería llamar a un método de la clase padre o de 
la clase hija y es aqui dondeestamos aplicando las múltiples formas en que se 
puede llamar un método, dependiendo del tipo al cual esté apuntando bien.
*/

// vamos a definir directmante los valores de los atributos sin protegerlos
// no es una buena práctica, pero para simplificar el código 
class Empleado {
    constructor(nombre, sueldo){
        this.nombre = nombre;   // lo correcto es _nombre y _sueldo
        this.sueldo = sueldo;
                                
    }

    obtener_detalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}


// En esta clase vamos a agregar el método obtener_detalle() para agregar el 
// comportamiento de la clase Gerente y agregar el departamento
class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    // Sobre esribimos el método
    // -------------------------
    obtener_detalles(){
        // Formas de modificar el método

        // FORMA 1.
        // return `Gerente: depto: ${this.departamento}`;

        // FORMA 2.
        // return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}, Gerente: depto: ${this.departamento}`;

        // FORMA 3.
        return `${super.obtener_detalles()}, Gerente: depto: ${this.departamento}`;
    }
}

// Creamos la función que llamará a la clase
// el parametro no sabe de que tipo es, solo hasta el momento en que recibe 
// una referencia
function imprimir(cualquier_tipo){
    console.log(cualquier_tipo.obtener_detalles());
}


let empleado1 = new Empleado("Juan", 10000);
let gerente1 = new Gerente("Carlos", 5000, "Sistemas");

imprimir(empleado1);
imprimir(gerente1);
