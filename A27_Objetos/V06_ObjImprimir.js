/* DISTINTAS FORMAS DE IMPRIMIR UN OBJETO

Como mandar imprimir un objeto, aunque ya hemos visto que cuando trabajamos 
con la consola directamente en Visual Studio Code, si ponemos 

    console.log(OBJETO) 

Se mandan a imprimir tanto sus propiedades como sus valores, sin embargo, 
CUANDO ESTAMOS DENTRO DE UN NAVEGADOR WEB, PODRÍAMOS NO TENER EL MISMO 
RESULTADO Y SIMPLEMENTE SE MANDARÍA A IMPRIMIR LO SIGUIENTE OBJECT y 
posteriormente Object. Y esto, obviamente, no nos va a servir para saber qué es 
lo que está imprimiendo nuestro objeto, cuáles son sus valores, cuáles son sus 
propiedades y entonces no nos va a permitir saber el detalle de nuestros 
objetos, por lo tanto, existen otras formas para mandar a imprimir nuestros 
objetos cuando estamos trabajando ya en un navegador web.
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

// FORMA 1 Concatenando las propiedades como una cadena
console.log(persona.nombre + ", " + persona.apellido + ", " + persona.email)

// FORMA 2 ITerando los elementos del objeto mediante un FOR
for (nombre_propiedad in persona) {
    console.log(persona[nombre_propiedad]);
}

// FORMA 3. Usando el método OJECT.VALUES(), retorna nuestro objeto como un arreglo
let persona_arreglo = Object.values(persona);
console.log(persona_arreglo);

// FORMA 4. Usando una cadena y el método JSON Convierte nuestro objeto a 
// una cadena, manda a imprimir cada valor con sus propiedades
let persona_string = JSON.stringify(persona);
console.log(persona_string);