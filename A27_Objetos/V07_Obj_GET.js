/* METODO GET EN OBJETOS

Concepto de los métodos GET y SET, cuando estamos trabajando con objetos y 
básicamente este concepto son mejores prácticas para acceder y modificar 
los valores de las propiedades de nuestros objetos, por ejemplo, en este caso 
tenemos la propiedad de nombre completo que apunta a una función. Sin embargo, 
para poder acceder a esta función tenemos que hacer lo siguiente:

let persona = {
    nombre: 'Karla',
    apellido: 'Sánchez',
    email: 'karlas@mail.com',
    edad: 30,
    nombre_completo: function(){        <<<<<---- Funcion exige parentesis ()
        return this.nombre + ' ' + this.apellido
    }
}
En caso de no indicar los parentesos solo imprimira λ
console.log(persona.nombre_completo()); <<--- Exige patentesis para ser llamada
    
Debido a que es una función, si no ponemos paréntesis, solamente se imprime el 
nombre de la función, así que para poder ejecutar esta función tenemos que 
indicar que es una función, por lo tanto indicamos paréntesis y con esto ya se 
ejecuta la función y se muestran los valores del nombre que es precisamente lo 
que hace esta función. Sin embargo, existe otra forma para poder mandar a 
llamar esta función y es utilizando el concepto de GET SET significa obtener 
en inglés, por lo tanto nos permite acceder a los valores de nuestras
propiedades y también vamos a ver el concepto de SET posteriormente, que en 
inglés significa establecer o modificar y vamos a utilizar los métodos SET 
para modificar los valores de los atributos de nuestros objetos.

En este objeto declaramos la funcion nombre_completo, pero para poder leer
la funcion como si fuera simplemente un atributo mas agregamos el método GET
y directamente lo declaramos como una funcion
NOMBRE_COMPLETO: FUNCTION(){ ...  va a cambiar por GET NOMBRE_COMPLETO(){
                 ▲▲▲▲▲▲▲▲▲▲                        ▲▲▲                ▲▲

Con GET JavaScript entiende que vamos a recuperar información de nuestro 
objeto

COMO RESUMEN ES LA CREACIÓN DE GETTERS, lo que simplifica la sintaxis, ahora
los métodos se llaman como si fuera un atributo, ya no como función por eso ya
no son necesarios los parentesis (En la lección de SETTERS se entenderá el 
concepto), es lo mismo que los getters y setters de Python.
*/
let persona = {
    nombre: 'Karla',
    apellido: 'Sánchez',
    email: 'karlas@mail.com',
    edad: 30,
    // nombre_completo: function(){         se reemplaza por:
    nombre_completo(){
        return this.nombre + ' ' + this.apellido
    }
}

// Se simplifica la sintaxis para llamar a la función, ahora solo se ve como 
// un atributo, ahora mas bien parce una propiedad
console.log(persona.nombre_completo);
