/* MANEJO DE LA FUNCIÓN ISINSTANCEOF()

+--------------------+              +--------------------+
|      Empleado      |              |     Gerentedo      |
+--------------------+              +--------------------+
| nombre: string     | <----------- | obtener_detalles() |
| sueldo:number      |              +--------------------+
+--------------------+              
| obtener_detalles() |               
+--------------------+              

ISINSTANCE lo queva a hace es permitirnos saber el tipo de datos con el que
estamos trabajando, para saber si el tipo de dato corresponde a cierta clase
*/

class Empleado {
    constructor(nombre, sueldo){
        this.nombre = nombre;   // lo correcto es _nombre y _sueldo
        this.sueldo = sueldo;
                                
    }

    obtener_detalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}


class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtener_detalles(){
        return `${super.obtener_detalles()}, Gerente: depto: ${this.departamento}`;
    }
}

// Creamos la función que llamará a la clase
// el parametro no sabe de que tipo es, solo hasta el momento en que recibe 
// una referencia
function imprimir(cualquier_tipo){
    if (cualquier_tipo instanceof Empleado){
        console.log("Es un objeto del tipo Empleado");
    }
    if (cualquier_tipo instanceof Gerente) {
        console.log("Es una instalcia del tipo Gerente");
    }
    if (cualquier_tipo instanceof Object){
        console.log("Es una instancia del tipo Object");
    }
    console.log(cualquier_tipo.obtener_detalles());
}


let empleado1 = new Empleado("Juan", 10000);
let gerente1 = new Gerente("Carlos", 5000, "Sistemas");

//imprimir(empleado1);
imprimir(gerente1);
