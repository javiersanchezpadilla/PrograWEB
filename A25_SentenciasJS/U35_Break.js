// BREAK PARA ROMPER LOS CICLOS
// el sigueinte ejempĺo tiene un contado de 0 hasta 10 pero en el valor 4 se rompe

for(let cont=0; cont<10; cont++){
    if(cont == 4) { break; }
    console.log('El valor de contador es ' + cont)
}

console.log('Fin del contador');
