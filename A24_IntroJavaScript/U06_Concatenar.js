// Concatenación de cadenas 

var nombre = 'Juan';
var apellido = 'Perez';

// Para concatenar solamente sumamos las cadenas
var nombre_completo = nombre + ' ' + apellido;

console.log(nombre_completo);
console.log(typeof nombre_completo);

// Tambien podemos concatenar directamente
var nonmbre_completo_ver2 = 'Joaquin' + ' ' + 'Sabina';
console.log(nonmbre_completo_ver2);

// CONCATENAR NUMEROS A CADENAS (CONTEXTO STRING)
// ----------------------------------------------
// Las cadenas en JavaScript se evaluan de izquierda a derecha 
// aunque el lenguaje da prioridad a las cadenas en cualquier sentido
// por lo tanto nombre es una cadena por lo que el resto lo tomará como
// una cadena y el resultado será Juan219
var x = nombre + 219
console.log(x);

// nuevamente por la evaluación de izq a der. el resultado es Juan24610
var x2 = nombre + 2 + 4 + 6 + 10;
console.log(x2);

// Si queremos que se concatene la suma de los valores con la cadena
// cambiamos la prioridad interna ejecutandose primero (1+10+9) = 20
// por lo que el resultado será juan20
var x3 = nombre + ( 1 + 10 + 9);
console.log(x3);
console.log(typeof x3);


// Nuevamente se menciona que en JavaScript se da prioridad a las cadenas
// solo recordar que al leerse de izquierda a derecha primero se ejecutan
// las operaciones y posteriormente se concatena el texto 40nombre
var x4 = 10 + 10 + 20 + nombre;
console.log(x4);
console.log(typeof x4);