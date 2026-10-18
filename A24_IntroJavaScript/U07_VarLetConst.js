// PAra este ejercico requerimos instalar la extensión de 
// Quokka Statusbar buttons Agrega iconos abajo sobre Quokka
// Formas de declarar las variables
// var      forma antigua (ya no es muy comun)
// let      nueva forma
// cont     para declarar una constante
// de hecho podemos directamente usar la variable como en Pyton
// pero no es una buena práctica, simpre debemos indicar var, let o const

// FORMA 1. Declarar sin definicion (no es una buena práctica)
nombre = "JAvier";
console.log(nombre);
console.log(typeof nombre);


// FORMA 2. Forma antigua usando VAR 
var nombre2 = 'Juan';
console.log(nombre2);
console.log(typeof nombre2);


// FORMA 3. Mediante LET
let nombre3 = 'Karla';
console.log(nombre3);
console.log(typeof nombre3);

// No es necesario inicializar de inmediato
let nombre4;            // Declaramos la variable
nombre4 = 'Sara';       // Le asignamos un valor posteriormente
console.log(nombre4);
console.log(typeof nombre4);


// FORMA 4. Declaración de constantes
const apellido = 'Perez';
// apellido = 'Ramirez';       // Esto es ERROR ya que las constantes no cambian
console.log(apellido);