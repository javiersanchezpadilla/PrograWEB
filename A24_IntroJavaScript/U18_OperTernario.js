/*  OPERADOR TERNARIO EN JAVASCRIPT
    -------------------------------

    Sintaxis:
    
        Condicion ? Expresion_1 : Expresion_2

        Si CONDICION es TRUE  entonces Expresion_1
        Si CONDICION es FALSE entonces Expresion_2
*/ 

let resultado = 3 > 2 ? "Es verdadero" : "Es totalmente Falso";
console.log(resultado);

let resultado2 = 3 > 12 ? "Es verdadero" : "Es totalmente Falso";
console.log(resultado2);


// para determinar si un valor es par o impar
let numero = 10;
resultado = numero % 2 == 0 ? "Es un numero par" : "Es un numero impar"
console.log(resultado);
