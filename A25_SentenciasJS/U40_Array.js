// ARREGLOS EN JAVASCRIPT (AGREGAR ELEMENTOS AL FINAL DEL ARREGLO)

//  FORMA 2. Podemos directamente apuntar a una posición mas arriba del
//           último elemento del arreglo para insertar el valor, solo se
//           debe tener mucho cuidado para no salirnos del index
//  índices   [0]         [1]          [2]      [3]
//  autos = ['BMW', 'Mercedes Benz', 'Volvo', 'Audi']

// Podemos aumentar el elemento en la posición 4 y no estariamos out of index


const autos = ['BMW', 'Mercedes Benz', 'Volvo', 'Audi']
console.log(autos);

for(let cont=0; cont<autos.length; cont++ ){
    console.log(autos[cont]);
}

// Agrega dos elementos al final del arreglo
autos[autos.length] = 'Cadillac';   // Posición 4
autos[autos.length] = 'BYD';        // Posición 5

for(let cont=0; cont<autos.length; cont++ ){
    console.log((cont + 1) + '.- ' + autos[cont]);
}
