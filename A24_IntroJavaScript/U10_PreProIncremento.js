// Manejo de Pre-Incremento y Post-Incremento
// Pre incremento (antes de) ++ variable
// Post incremento (despues de) ariable ++

let a = 3;
let b = 2;
let z = a + b;

// Pre incremento
z = ++a;        // primero se incrementa y luego se asigna a "z"
console.log(a);
console.log(z);

// Post incremento
z = b++;        // primero de asigna a "z" y luego se incrementa
console.log(b);
console.log(z);

// PRE DECREMENTO  POST DECREMENTO (--)
// Funciona exactamente igual pero con resta
// Pre Decremento
z = --a;        // Priimero se decrementa y luego se asigna a "z"
console.log(a);
console.log(z);

// Post decremento
z = a--;        // Primero de asigna a "z" y luego se decrementa
console.log(a);
console.log(z);
