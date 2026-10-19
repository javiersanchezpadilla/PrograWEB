// LABELS ES EL USO DE GOTO EN JAVASCRIPT
// NO ES BURNA PRÁCTICA (NO USARLO)

// LO PODEMOS USAR CON CONTINUE O CON BREAK

inicio:         // <-- Esta es una etiqueta

for(let cont=0; cont<=10; cont++){
    if(cont % 2 !== 0) {    // Si es un número impar
            continue inicio; }     // Lo manda a la sigueinte etiqueta
        else {
            console.log(cont);
        }
}

console.log('Fin del contador');




// Tambien funciona con BREAK
otro_inicio:         // <-- Esta es una etiqueta

for(let cont=0; cont<=10; cont++){
    if(cont % 2 !== 0) {    // Si es un número impar
            break otro_inicio; }    // Lo manda a romper el ciclo
                                    // que se encuentra abajo de la etiqueta
        else {
            console.log(cont);
        }
}

console.log('Fin del contador');
