// Buenas practicas para la declaración de las variables
// a partir de aquí usaremos LET y camelCase (notacion alta y bajas)
// Aunque yo prefiero el uso de PEP8

let nombre_completo = 'Juan Perez';
console.log(nombre_completo);

// Podemos declarar mas de una variable 
let x, y;
 x = 10, y = 20;

 let z = x + y;
 console.log(z);

 // SEnsible a mayúsculas y minúsculas, en ambos casos son
 // dos valores totalmente distintos
 let nombre_apellido = 'Juan Perez';
 let Nombre_Apellido = 'Karla Sánchez';
 console.log(nombre_apellido);
 console.log(Nombre_Apellido)

// REGLAS PARA La definición de las variables:
// -------------------------------------------
// 1. No dben comenzar con numeros
// 2. Solo se permite guion bajo o el signo de Dollar ($)
// 3. no podemos usar palabras reservadas del lenguaje
let mi_variable;            // Correcto
let _mi_variable;           // correcto
let $mi_variable;           // correcto
// let 4mi_variable;    incorrecto ERROR
// let break = 10;      ERROR (break es una palabra reservada)