/* AGREGAR O ELIMINAR OBJETOS 

Vamos a ver como eliminar o agregar propiedades al vuelo

Para agregar: Al agregar nuevas propiedades debemos tener cuidado debido a que
si nos equivocamos al momento de escribir el nombre de la propiedad, estariamos 
agregando una nueva propiedad (tel <> te1)

    objeto.nuevo_objeto = valor

*/ 

let persona = {
    nombre: 'Karla',
    apellido: 'Sánchez',
    email: 'karlas@mail.com',
    edad: 30,
    nombre_completo: function(){
        return this.nombre + ' ' + this.apellido
    }
}

// Para agregar propiedades a nuestro objeto
persona.genero = 'Femenino';
console.log(persona);
console.log('');

// Para eliminar propiedades a nuestro objeto
delete persona.email;       // Borramos la propiedad email
delete persona.edad;        // Borramos la propiedad edad
console.log(persona);
