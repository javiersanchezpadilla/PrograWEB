/* USO DEL TEMPLATE STRING

Los template strings (también conocidos como template literals o cadenas de 
plantilla) son una de las herramientas más útiles y limpias que introdujo 
JavaScript moderno.

Si tenemos un mensaje donde es necesario mezclar texto fijo con datos que 
cambian (como el nombre de un usuario, una fecha o un precio). Antes, hacer 
esto es complicado ya que tenemos que llenar de comillas y signos de suma (+)
la cadena resultado. 
Los template strings llegaron para hacer nuestra vida mucho más fácil.

1. Se requiere eluso de las comillas invertidas (Backticks)
------------------------------------------------------------
En lugar de usar comillas simples (') o dobles ("), los template strings 
utilizan comillas invertidas (`) también conocidas como backticks que es esa 
tecla que suele estar al lado de la letra P o de la ñ en el teclado.
Y para insertar una variable dentro del texto, utilizas una sintaxis sencilla 
con un signo de dólar y llaves: ${variable}.

*/          

const nombre = "Carlos";
const edad = 25;
let mensaje = "";

// Mensaje clasi para formar una cadena resultado
mensaje = "Hola, " + nombre + ". Veo que tienes " + edad + " años.";
console.log(mensaje);

// Mediante el uso de template string
mensaje = `Hola, ${nombre}. Veo que tienes ${edad} años.`;
console.log(mensaje);
