/* FUNCIONES FLECHA (funciones anonimas) PARTE 02

En este ejemplo vamos a simplificar lo mas que se pueda una función flecha
Después de definir el simbolo de inicio del desarrollo de la funcion (=>)
podemos referenciar una sola linea, esto quiere decir que no son necesarios
las llaves {}, cuando son mas de una linea de código a procesar si son
necesarias

*/

// const miFuncionFlechaConstante = () => {
//     console.log("Saludos desde mi función fecla CONST")
// }
// EJEMPLO 01. Eliminar las llaves solo si es una linea a procesar
const miFuncionFlechaConstante = () => 
    { console.log("Saludos desde mi función fecla CONST"); }

// EJEMPLO 02. Retorno de valores por parte de la función flecha
const miFuncSaludar = () => { 
    console.log("Saludos desde la función flecha"); }

// EJEMPLO 03. Retornar un objeto desde la función flecha, aquí para evitar 
// problemas debemos hacer  lo siguiente:
//                                 |                                     |
//                                 ▼                                     ▼
// si hacemos esto          () =>  {nombre: "Javier", apellido: 'Padilla'}

// se puede confundir con el desarrollo de la función y no con el objeto a 
// regresar, entonces para evitar este problema lo encerramos entre parentesis
//     |                                         |
//     ▼                                         ▼     
// =>  ( {nombre: "Javier", apellido: 'Padilla'} )
const miFuncRegresaObj = () =>  ({nombre: "Javier", apellido: 'Padilla'})


// EJEMPLO 04. Funciones con parámetros
const miFuncConParams = (valor1, valor2, valor3) => {
    return valor1 + valor2 + valor3;
}

// EJEMPLO 05. Uso de un solo parámetro.
// Cuando se maneja un solo parametro no es necesario el uso de patentesis
// si funciona solo que la extensión de Quoka exige la siguiente sintaxis
// completa usando los parentesis y las llaves para poder visualizar el result

// const miFuncConUnParam = param_nombre => console.log('Hola ' + param_nombre) ;
const miFuncConUnParam = param_nombre => {console.log('Hola ' + param_nombre)};


// EJEMPLO 06. Otro ejemplo usando varios parametros y retornandun un
// template string
const miFuncParametros = (op1, op2, op3) => {
    let resultado = op1 + op2 + op3;
    return resultado;
}



miFuncionFlechaConstante();
console.log(miFuncSaludar());

mi_objeto = miFuncRegresaObj();
console.log(mi_objeto);
console.log(mi_objeto.nombre);
console.log(mi_objeto.apellido);

console.log(miFuncConParams(10, 20, 30));

miFuncConUnParam('Javier');

console.log(miFuncParametros())