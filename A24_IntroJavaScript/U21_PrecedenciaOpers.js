// PRECEDENCIA DE OPERADORES EN JAVASCRIPT (PEMDAS)

let x = 5;
let y = 10;
let z = ++x + y--;  // z=(x=6)+(y=10)=16     x=6      y=9

console.log(x);
console.log(y);
console.log(z);


let resultado = 4 + 5 * 6  / 3; //  4+(5*6=30)/3   4+(30/3=10)  4+10=14
console.log(resultado);


resultado = ( 4 + 5 ) * 6  / 3;   //  (4+5=9)*6/3   (9*6=54)/3  54/3=18
console.log(resultado);
