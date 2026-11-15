/* SOBRE ESCRITURA DE MÉTODOS (NO ES POLIMORFISMO)

+--------------------+
|      Empleado      |
+--------------------+
| nombre: string     |
| sueldo:number      |
+--------------------+
| obtener_detalles() |      <-- imprime los detalles del empleado
+--------------------+
          ▲
          |
          |  
+--------------------+
|     Gerentedo      |
+--------------------+
| obtener_detalles() |      <-- sobre esribe el comportamiento del método
+--------------------+

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

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1.obtener_detalles());
