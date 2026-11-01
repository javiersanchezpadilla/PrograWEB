/* MÉTODO CONSTRUCTOR

Hasta el momento hemos creado objetos, pero si queremos reutilizar este código
por ejemplo, para crear un nuevo objeto de tipo persona, considerando todos 
los atributos y métodos que ya hemos definido, no es posible, así que tenemos 
una limitante muy grande, si estamos trabajando con objetos de esta forma.
Así que por ello es conveniente empezar a trabajar con constructores que nos 
permitan crear todo este contenido, todos estos atributos y métodos para poder
crear más objetos de tipo persona y no solamente un objeto.
Ya que en este caso, si queremos volver a crear un objeto de tipo persona, 
tenemos que volver a repetir todos sus atributos, asignando sus valores y 
también agregando los métodos, para ello vamos a ver el tema de constructores 
y básicamente un constructor es una función especial que vamos a trabajar con 
objetos en JavaScript y para mandar a llamar una función constructor vamos a
utilizar la palabra reservada NEW para reservar espacio en memoria del objeto 
que vamos a crear.

this = self
*/

// creamos una funcion para los nuevos objetos que queremos crear
// vamos apoder crear varios objetos
function Persona(nombre, apellido, email){
    this.nombre = nombre;                   // atributo nombre
    this.apellido = apellido;               // atributo apellido
    this.email = email;                     // atributo email
}


// Creamos un objeto de nombre padre
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre)

// Creamos otro objeto de nombre madre
let madre = new Persona('Karla', 'Santana', 'karlasan@mail.com');
console.log(madre);

// Hacemos cambios en uno de los objetos
padre.nombre = 'Carlos'
console.log(padre);
console.log(madre);
