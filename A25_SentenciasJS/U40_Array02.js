// ARREGLOS EN JAVASCRIPT
// MOSTRAR LOS ELEMENTOS DE UN ARREGLO Y ACCEDIENDO A ELLOS
// puede almacenar valores de cualquier tipo

// Acceder a los elementos de un arreglo
// índice -->     [0]         [1]            [2]
//             ['BMW', 'Mercedes Benz', 'Volvo']

const autos = ['BMW', 'Mercedes Benz', 'Volvo']
console.log(autos);


console.log('MOSTRANDO ELEMENTO POR ELEMENTO DEL ARREGLO:')
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);


console.log('RECORRIENDO EL ARREGLO MEDIANTE UN CICLO:')
for(let cont=0; cont<autos.length; cont++ ){
    console.log(autos[cont]);
}
