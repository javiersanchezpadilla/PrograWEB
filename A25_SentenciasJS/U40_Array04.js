// ARREGLOS EN JAVASCRIPT (AGREGAR ELEMENTOS AL FINAL DEL ARREGLO)

//  FORMA 1. mediante el método .push(), que permite agregar un
//           elemento al final del arreglo

const autos = ['BMW', 'Mercedes Benz', 'Volvo']
console.log(autos);

for(let cont=0; cont<autos.length; cont++ ){
    console.log(autos[cont]);
}

// Agrega dos elementos al final del arreglo
autos.push('Ford');         // Agrega al final del arreglo Ford
autos.push('Chrisler');     // Agrega al final del arreglo Chrisler

for(let cont=0; cont<autos.length; cont++ ){
    console.log(autos[cont]);
}
