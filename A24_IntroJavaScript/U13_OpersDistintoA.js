// OPERADOR DISTINTO A...

// Permite saber si las variables a comparar son distintas
// !=   DESIGUALDAD NO ESTRICTA (compara los valores)
// !==  DESIGUALDAD ESTRICTA (compara los tipos y los valores)
let a = 3, b = 2, c = "3";

// DEIGUALDAD NO ESTRICTA (Solo revisa el valor no el tipo de dato)
// ----------------------------------------------------------------
// puede comparar cadenas y valores, Ej. 3 es igual a "3"
let z = a != b;     // 3 != 2 verdadero
console.log(z);

let w = a != c;     // al no ser estricta no son distintos ya que 3 es igual a "3"
console.log(w);

// DEIGUALDAD ESTRICTA (Revisa valor y tipo de dato)
// -------------------------------------------------
// ya con que los tipos de datos sean distintos automaticamente la
// desigualdad es verdadera
let m = a !== c;    // como los tipos son distintos el resultado es true
console.log(m);
