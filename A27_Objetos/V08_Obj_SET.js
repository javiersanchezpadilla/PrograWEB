/* MÉTODO SET EN JAVASCRIPT

Vamos a ver cómo agregar algunas validaciones cuando almacenamos o recuperamos 
información de nuestros objetos en JavaScript.
Ya vimos el uso de GET, ahora vamos a ver el uso de SETy también lo vamos a 
combinar con el uso de GET, lo que vamos a hacer es agregar una nueva 
propiedad, después de la edad, vamos a agregar una propiedad que se llame 
idioma y este idioma lo vamos a almacenar en minúsculas, sin embargo, por 
buenas prácticas, normalmente las letras, cuando trabajamos con idiomas se 
trabajan con mayúsculas, Ej.: ES español, US ingles, ES_MX español de méxico
así es como normalmente se almacenan los idiomas, pero puede darse el caso que 
almacenamos el idioma simplemente en minúsculas y para ello es que vamos a 
agregar un método GET y un método SET para que cuando recuperemos esta 
información la almacene en mayúsculas Y también la recupere en mayúsculas.
Vamos a agregar un método, "lang" (lenguaje en ingles)

GET Obtener (métodos getters)
SET Fijar (métodos setters)
*/

let persona = {
    nombre: 'Karla',
    apellido: 'Sánchez',
    email: 'karlas@mail.com',
    edad: 30,
    idioma: 'es',
    get lenguaje() {
        return this.idioma.toUpperCase();   // convierte cadena a mayúsculas
    },

    set lenguaje(el_lenguaje) {             // cambia el parametro a mayúsc
        this.idioma = el_lenguaje.toUpperCase();
        },

    get nombre_completo(){
        return this.nombre + ' ' + this.apellido
    }
}

// Se simplifica la sintaxis para llamar a la función, ahora solo se ve como 
// un atributo, ahora mas bien parce una propiedad
// Cuando usamos los getters y setters los métodos ahora se ven como un 
// atributo
console.log(persona.nombre_completo);

// Para llamar el método como usamos getters, ahora solo se ve como un 
// atributo, ya no son necesarios los parentesis
console.log(persona.lenguaje);

// En este caso para asignar el valor al atrinbuto idioma, lo hacemos mediante
// un método setter, entonces la asignación se ve solo como la asignación de
// un tatributo normal, en lugar de usar persona.lenguaje('en') solo se 
// necesario usar persona.lenguaje = 'en';
persona.lenguaje = 'us';

// podemos observar que se almaceno correctamente la información
console.log(persona.idioma);
