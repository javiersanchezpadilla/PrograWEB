/* SETTIMEOUT UTILIZANDO PROMESAS

Llamadas asincronas y utilizando el cocepto de promesas
En el manejo de las promesas no es necesario manejar los dos parametros
podemos solo manejar el parámetro de resolver, así que en este ejemplo
vamos a omitir el parametro de rechazar
*/

let promesa = new Promise( (resolver) => {
    console.log('Inicio promesa');
    setTimeout( () => { resolver('Saludo con Promesa y TimeOut')}, 1000)
    console.log('Fin promesa');
});


promesa.then((valor) => {console.log(valor)});
