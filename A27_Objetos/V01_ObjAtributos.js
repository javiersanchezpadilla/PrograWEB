/* MANEJO DE OBJETOS EN JAVASCRIPT (NO ES CREACIÓN DE CLASES)

La diferencia entre en manejo de datos primitivos y clases consiste en que
los datos primitivos no tienen propiedades ni métodos, por ejemplo no existe
in  10.lenght.

Un obejto puede contener propiedades y métodos, en este ejemplo se trabajara 
solo la creación de los objetos con atributos.

let objeto = { x: 5, 
               y:6 
              };

*/ 

let persona = {
    nombre: 'Karla',
    apellido: 'Sánchez',
    email: 'karlas@mail.com',
    edad: 30
}


console.log('IMPRIENDO TODO EL OBJETO:');
console.log(persona);

console.log('');
console.log('IMPRIENDO LOS ELEMENTOS INDIVIDUALES');
console.log('Nombre: ' + persona.nombre);
console.log('Apellido: ' + persona.apellido);
console.log('E-mail: ' + persona.email);
console.log('Edad: ' + persona.edad);
