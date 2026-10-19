// ARREGLOS EN JAVASCRIPT (AGREGAR ELEMENTOS AL FINAL DEL ARREGLO)

//  FORMA 3. Podemos indicar una posición (indice) directamente
//           aún apuntando a un valor fuera del rango, pero no es
//           recomendable, aunque no marca error no es la mejor
//           práctica
//  índices   [0]         [1]          [2]      [3]  [4]   [5]
//  autos = ['BMW', 'Mercedes Benz', 'Volvo', 'Audi',  , 'Porsche']

// Vamos a dejar el espacio [4] vacio asignando el índice [5]

// EL RESULTADO ES UN ARREGLO CON VALORES INDEFINIDOS


const autos = ['BMW', 'Mercedes Benz', 'Volvo', 'Audi']
console.log(autos);

// Agregando un elemento saltando un índice
autos[5] = 'Porsche';               // Posición 5

autos[10] = 'Porsche';               // Posición 10

for(let cont=0; cont<autos.length; cont++ ){
    console.log((cont + 1) + '.- ' + autos[cont]);
}
