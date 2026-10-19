// ARREGLOS EN JAVASCRIPT (COMO SABER SI UN ARREGLO ES REALMENTE UN ARREGLO)
//  Si usamos la funcion typeof nos indicará que es un objeto
//  Pero existen alternativas para resolver esto.

const autos = ['BMW', 'Mercedes Benz', 'Volvo', 'Audi']
console.log(autos);

// Nos idica que es un objeto
console.log(typeof autos);

// FORMA 1. Array.isArray(mi_arreglo) Resultado TRUE
console.log(Array.isArray(autos));

// FORMA 2. miarreglo instanceof Array Resultado TRUE
console.log(autos instanceof Array);
