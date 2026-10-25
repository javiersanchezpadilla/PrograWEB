/* CREACIÓN DE OBJETOS MEDIANTE LA PALABRA NEW

Ya sabemos como crear un objeto en JavaScript donde simplemente definimos 
nuestra variable que va almacenar la referencia del objeto que se crea en 
memoria y del lado derecho simplemente abrimos y cerramos llaves y empezamos 
a agregar nuestras propiedades separadas por coma y cada una de las propiedades
le asigmamos sus valores mediante dos puntos.
De esta manera definimos una colección de propiedades que contiene nuestro 
objeto y recordemos que algunas de esas propiedades pueden tener referencias a 
funciones (función o método es exactamente lo mismo).

Pero no es la única forma de definir un objetos en JavaScript, también podemos 
utilizar la palabra reservada NEW para reservar espacio en memoria y crear un 
objeto, no es la mas común pero existe

*/ 

// Esto le dice a JacaScript que estamos creando un nuevo objeto en memoria
let persona = new Object();

// Le asignamos sus atributos directamente
persona.nombre = 'Karla';                                    // Atributo
persona.apellido = 'Sánchez';                                // Atributo
persona.email = 'karlas@mail.com';                           // Atributo
persona.edad = 30;                                           // Atributo
persona.direccion = 'Jupiter 35';



console.log('IMPRIENDO TODO EL OBJETO:');
console.log(persona);

console.log('');
console.log('IMPRIENDO LOS ELEMENTOS INDIVIDUALES');
console.log('Nombre: ' + persona.nombre);
console.log('Apellido: ' + persona.apellido);
console.log('E-mail: ' + persona.email);
console.log('Edad: ' + persona.edad);
console.log('Dirección: ' + persona.direccion);

