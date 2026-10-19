// CONTINUE obliga al ciclo a avanzar al siguiente valor
// BREAK PARA ROMPER LOS CICLOS
// CONTINUE PARA FORZAR EL SIGUIENTE ELEMENTO DEL CICLO


for(let cont=0; cont<=10; cont++){
    if(cont % 2 !== 0) {    // Si es un número impar
            continue; }     // Avanza al siguiente iteración
        else {
            console.log(cont);
        }
}

console.log('Fin del contador');
