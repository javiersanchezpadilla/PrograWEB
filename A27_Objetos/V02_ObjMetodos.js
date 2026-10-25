/* MANEJO DE METODOS EN LOS OBJETOS EN JAVASCRIPT (NO ES CREACIÓN DE CLASES)

Para agregar métodos en los objetos, lo vamos a hacer como si agregaramos
una propiedad, posteriormente agregamos una función del tipo expresión.

Un obejto puede contener propiedades y métodos, en este ejemplo se trabajara 
solo la creación de los objetos con atributos y metodos

let objeto = { x: 5,                                <-- Propiedad o atributo
               y:6,                                 <-- Propiedad o atributo
               metodo: function(args){              <-- Método o comportamiento
                             return this.propiedad
                           } 
              };

Para apuntar a los atributos del objeto lo hacemos con this (THIS = SELF)

*/ 

let persona = {
    nombre: 'Karla',                                    // Atributo
    apellido: 'Sánchez',                                // Atributo
    email: 'karlas@mail.com',                           // Atributo
    edad: 30,                                           // Atributo
    nombre_completo: function(){                        // MÉTODO
        return this.nombre + ' ' + this.apellido
    }
}


console.log('IMPRIENDO TODO EL OBJETO:');
console.log(persona);

console.log('');
console.log('IMPRIENDO LOS ELEMENTOS INDIVIDUALES');
console.log('Nombre: ' + persona.nombre);
console.log('Apellido: ' + persona.apellido);
console.log('E-mail: ' + persona.email);
console.log('Edad: ' + persona.edad);

console.log('')
console.log('Imprimimos el nombre completo');
console.log(persona.nombre_completo());

