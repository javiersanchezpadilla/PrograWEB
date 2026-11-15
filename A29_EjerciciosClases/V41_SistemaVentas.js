/* DESARROLLO DE UN SISTEMA DE VENTAS 

+---------------------------------------+          +--------------------------+
|                Orden                  |          |        VentasTest        |
+---------------------------------------+          +--------------------------+
| -id_orden: number                     |          | Esto no es una clase     |
| -id_productos[]: Producto             |          | Es la prueba de creación |
| -contador_productos_agregados: number | <- - - ->| de objetos Producto y    |
| -contador_ordenes: number             |          | Orden                    | 
| MAX_PRODUCTOS Number = 5              |          +--------------------------+
+---------------------------------------+          | Responsabilidades:       |
| Orden()  Constructor                  |          | -- Ejecutar la prueba de |
| agregar_producto(producto)            |          |    la aplicación de      |
| calcular_total(): number              |          |    Ventas                |
| toString(): string                    |          +--------------------------+ 
+---------------------------------------+
| Responsabilidades                     |
| -- Crear objetos Orden                |
| -- Administrarlos productos de una    |
|    orden                              |
+---------------------------------------+
                  ▲
                  |
                  ◇  << Un producto se agrea a una orden >>
                  |   Tema de funciones de AGREGACIÓN
                  ▼
+-------------------------------------+
|              Producto               |
+-------------------------------------+
| -id_producto: number                |
| -nombre: string                     |
| -precio: number                     |
| -contador_productos: number         |
+-------------------------------------+
| -Producto()   Constructor           |
| +Prodcuto(nombre, precio)           |
| +get_id_producto: number            |
| +get_nombre(): string               |
| +set_nombre(nombre)                 |
| +get_precio(): number               |
| +set_precio(precio)                 |
| +toString(): string                 |
+-------------------------------------+
| Responsabilidades                   |
| -- Crear objetos de tipo Producto   |
+-------------------------------------+


La clase orden agrega productos que son objetos de la clase Orden, por eso se 
aplica el tema de AGREGACION
*/

// Se crea la primer clase que no tiene relación con otras (es padre)
class Producto {

    static contador_productos = 0;

    constructor(nombre, precio){
        this._id_producto = ++Producto.contador_productos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get id_producto(){ 
        return this._id_producto; 
    }

    get nombre(){ 
        return this._nombre; 
    }

    set nombre(nombre){ 
        this._nombre = nombre; 
    }

    get precio(){ 
        return this._precio; 
    }

    set precio(precio){ 
        this._precio = precio; 
    }

    toString(){
        return `ID Producto: ${this._id_producto}, nombre ${this._nombre}, precio: $ ${this._precio}`;
    }
}


// Creación de la clase Orden
class Orden {

    static contador_ordenes = 0;        // Atributo estico

    static get MAX_PRODUCTOS(){         // Simulacion de constante estatica
        return 5;
    }

    constructor(){
        this._id_orden = ++Orden.contador_ordenes;
        this._productos = [];           // Es un arreglo
        // this._contador_productos_agregados = 0;
    }

    get id_orden(){ return this._id_orden; }

    agregar_producto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);     // Sintaxis 1 para agregar 
            // Sintaxis 2 para agregr un elemento al arreglo, que es 
            // aprovechando el atrubito _constador_productos_agregados
            // this._productos[this._contador_productos_agregados++] = producto;
            
        }
        else {
            console.log("No se pueden agregar mas productos");
        }
    }

    // calula el total de los productos guardados
    // existe un for simplificado para recorrer atributos
    calcular_total(){
        let total_venta = 0;
        // Este es el for simplificado creamos la variable producto que 
        // recorrera al atributo this._productos
        for(let producto of this._productos){
            total_venta += producto.precio;
        }
        return total_venta;
    }

    // Solo va a recorrer los productos para imprimirlos
    mostrar_orden(){
        let productos_orden = '';
        for (let producto of this._productos){
            productos_orden += '\n {' + producto.toString() + '} ';
        }
        console.log(`Orden: ${this._id_orden} Total: $${this.calcular_total()}, Productos: ${productos_orden}`)
    }
}



// PRUBAS
let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);
let producto3 = new Producto('Lap Top', 10000);
let producto4 = new Producto('Raton', 120);
let producto5 = new Producto('Teclado', 300);
let producto6 = new Producto('Marcador', 60);
let producto7 = new Producto('Disco Duro', 1000);

console.log(producto1.nombre + ' ' + producto1.precio);
console.log(producto2.nombre + ' ' + producto2.precio);
console.log(producto3.nombre + ' ' + producto3.precio);
console.log(producto4.nombre + ' ' + producto4.precio);
console.log(producto5.nombre + ' ' + producto5.precio);
console.log(producto6.nombre + ' ' + producto6.precio);
console.log(producto7.nombre + ' ' + producto7.precio);

let orden1 = new Orden();
orden1.agregar_producto(producto1);
orden1.agregar_producto(producto2);
orden1.agregar_producto(producto3);
orden1.mostrar_orden();

let orden2 = new Orden();
orden2.agregar_producto(producto4);
orden2.agregar_producto(producto5);
orden2.agregar_producto(producto6);
orden2.agregar_producto(producto7);
orden2.mostrar_orden();
