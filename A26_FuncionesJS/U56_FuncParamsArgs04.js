/* FUNCIONES CON ARGUMENTOS VARIABLES

Esto es similar a args* de Python
*/ 

function sumarTodos(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];

    }
    return suma;
}

let resultado = sumarTodos();
console.log(resultado);

resultado = sumarTodos(1, 1);
console.log(resultado);

resultado = sumarTodos(5, 4, 13, 10, 9);
console.log(resultado);

resultado = sumarTodos(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
console.log(resultado);
