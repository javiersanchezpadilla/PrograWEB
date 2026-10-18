// Operadores de comparación
// El resutado será true o false

// ==   IGUALDAD NO ESTRICTA (compara los valores)
// ===  IGUALDAD ESTRICTA (compara los tipos y los valores)

let a = 3, b = 2, c = "3";

// IGUALDAD NO ESTRICTA (Solo revisa el valor no el tipo de dato)
// --------------------------------------------------------------
// puede comparar cadenas y valores, Ej. 3 es igual a "3"
let z = a == b;
console.log(z);

let w = a == c;     // al no ser estricta ambos son iguales 3 es igual a "3"
console.log(w);

// IGUALDAD ESTRICTA (Revisa valor y tipo de dato)
// -----------------------------------------------
// ya con que los tipos de datos sean distintos automaticamente el 
// resultado es falso
let m = a === c;
console.log(m);