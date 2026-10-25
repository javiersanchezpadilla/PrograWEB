/* ACCEDER A LAS PROPIEDADES DE LOS OBJETOS

Maneras altenativas de acceder a los objetos 
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

// FORMA 1. Acceder mediante nombre_objeto.propiedad
console.log(persona.nombre);
console.log(persona.apellido);

// FORMA 2. Acceder como si fuera un índice
console.log(persona['nombre']);
console.log(persona['apellido']);


// FORMA 3. Mediante un ciclo FOR con IN
// El ciclo accede a las propiedades (nombre, apellido, email, edad)
// y una vez que se cuenta con el nombre de la propiedad entonces ua
// podemos acceder a los valores
for (nombre_propiedad in persona) {

    // mostramos la propiedad extraida (nombre, apellido, email, edad)
    console.log(nombre_propiedad);
    // ya que contamos con el nombre de la propiedad extraemos el valor
    // persona[nombre], persona[apellido], persona[email], persona[edad]
    console.log(persona[nombre_propiedad])
}
