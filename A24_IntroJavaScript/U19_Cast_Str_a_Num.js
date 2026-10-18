// CONVERSIÓN DE CADENAS A VALORES NUMÉRICOS

let mi_numero = "10";   // asignamos el valor de cadena 10

console.log(mi_numero);
console.log(typeof mi_numero);

let edad = Number(mi_numero);
console.log(edad);
console.log(typeof edad);

if (edad >= 18) {
    console.log("Puede votar");
}
else {
    console.log("Muy joven para votar");
}


// La misma solución mediante el uso del OPERADOR TERNARIO
let resultado = edad >= 18 ? "Puede votas" : "Muy joven para votar";
console.log(resultado);