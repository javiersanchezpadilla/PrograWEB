/* DESARROLLAR EL SIGUIENTE PROGRAMA

+----------------+    <<agrega>>              +---------------+
|  Computadora   |_ _ _ _ _ _ /\ _ _ _ _ _ _  |     Orden     |
+----------------+            \/              +---------------+
        |
        |                                <<agrega>>           
        /\ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
        \/                            |                 |
        | <<agrega>>            +-----------+     +-----------+ 
        |                       |   Raton   |     |  Teclado  |  
+----------------+              +-----------+     +-----------+
|    Monitor     |                    |                 |
+----------------+                    +--------+--------+
                                               |
                                               ▽ 
                                      +--------------------+
                                      | DispositivoEntrada |   
                                      +--------------------+

SE recomienda crear las clases en el siguiente orden

POSICIÓN UNO                                POSICIÓN DOS
============                                ============
+----------------------------------+        +---------------------------------+
|   DispositivoEntrada             |        |             Raton               |
+----------------------------------+        +---------------------------------+
| tipo_entrada: string             |        | id_raton: number                |
| marca: string                    |        | contador_ratones: number        | 
+----------------------------------+        +---------------------------------+
| (Agregar los métodos get/set para|        | toString(): string              |
| cada atributo)                   |        +---------------------------------+
+----------------------------------+        | Responsabilidades               |
| Responsabilidades                |        | -- Crear objetos del tipo Raton |
| -- Crear objetos del tipo        |        +---------------------------------+
| DispositivoEntrada               |
+----------------------------------+


POSICION TRES                               POSICIÓN CUATRO
=============                               ================
+---------------------------------+         +----------------------------------+
|           Teclado               |         |           Monitor                |
+---------------------------------+         +----------------------------------+
| id_teclado: number              |         | id_monitos: number               |
| contador_teclado: number        |         | marca: string                    |     
+---------------------------------+         | tamaño: string                   |
| toString(): string              |         | contador_monitores: number       |
+---------------------------------+         +----------------------------------+
| Responsabilidades               |         | (Agregar los métodos get/set para|
| -- Crear objetos del tipo       |         | cada atributo)                   |
| Teclado                         |         | toSring() : string               |
+---------------------------------+         +----------------------------------+
                                            | Responsabilidades                |  
                                            | -- Crear objetos del tipo        |
                                            | monitor                          |
                                            +----------------------------------+

POSICION CINCO                              POSICION SEIS
==============                              =============
+----------------------------------+        +-----------------------------------+
|         Computadora              |        |              Orden                |
+----------------------------------+        +-----------------------------------+
| id_Computadora: number           |        | _id_orden: number                 |
| nombre: string                   |        | _computadoras: Computadora[]      | 
| monitor: Monitor                 |        | contador_ordenes: number          |
| teclado: Teclado                 |        +-----------------------------------+
| raton: Raton                     |        | (Agregar los métodos get/set para |
| contador_computaoras: number     |        | cada atributo)                    |
+----------------------------------+        | agregar_computadora(computadora)  |
| (Agregar los métodos get/set para|        | mostrar_orden()                   |
| cada atributo)                   |        | toString(): string                |
| toSring() : string               |        +-----------------------------------+
+----------------------------------+        | Responsabilidades                 | 
| Responsabilidades                |        | -- Crear objetos del tipo         |
| -- Crear objetos del tipo        |        | Orden y almacena un arreglo de    |
| computadora                      |        | objetos del tipo Computadora      |
+----------------------------------+        +-----------------------------------+

 */

class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadoras ){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton('USB', 'HP');
console.log( raton1.toString() );
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log( raton2.toString() );

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log( teclado1.toString() );
console.log( teclado2.toString() );

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log( monitor1.toString() );
console.log( monitor2.toString() );

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log( `${computadora1}` );
let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();