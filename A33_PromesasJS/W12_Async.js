/* PALABRA ASYNC CON PROMESA


*/

// let promesa = new Promise( (resolver) => {
//     setTimeout( () => { resolver('Saludo con Promesa y TimeOut')}, 1000)
// });


// ASYNC indica que una función regresa una promesa
// Esto ya hace las veces de resolver
async function miFuncionConPromesa() {
    return 'Saludo con promesa y ASYNC';
}


miFuncionConPromesa().then((valor) => {console.log(valor)});


