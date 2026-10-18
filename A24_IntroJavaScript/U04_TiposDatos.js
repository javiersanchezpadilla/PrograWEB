// Seguimos trabajando con mas tipos de datos
// Booleanos (true false)

var bandera = true;
console.log(bandera);
console.log(typeof bandera);


// Existe el tipo de dato función
function mi_funcion(){} 
console.log(mi_funcion);
console.log(typeof mi_funcion);


// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo)
console.log(typeof simbolo);


// Tipo de clase es una funcion
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);


// tipo de dato indefinido (undefined)
// cuando no inicializamos un valor se dice que tenemos un valor indefinido
var x;      // No estamos definiendo un valor
console.log(x);
console.log(typeof x);


// Tambien podemos asignar el valor "undefined" a una variable
x2 = undefined;
console.log(x2);
console.log(typeof x2);


// Tipo de dato NULL (auscencia de valor)
// cuando preguntamos por el tipo de dato de null no retorno que es un objeto
var y = null
console.log(y);
console.log(typeof y);