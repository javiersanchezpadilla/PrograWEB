// ARREGLOS EN JAVASCRIPT (MODIFICAR LOS ELEMENTOS DEL ARREGLO)
// índice -->     [0]         [1]            [2]
//             ['BMW', 'Mercedes Benz', 'Volvo']

const autos = ['BMW', 'Mercedes Benz', 'Volvo']
console.log(autos);

for(let cont=0; cont<autos.length; cont++ ){
    console.log(autos[cont]);
}

// Cambiamos el segundo elemento de Mercedez Benz a Volcho
autos[1] = 'Volcho'

for(let cont=0; cont<autos.length; cont++ ){
    console.log(autos[cont]);
}
