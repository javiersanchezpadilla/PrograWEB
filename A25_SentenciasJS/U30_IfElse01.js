// MANEJO DE IF ELSE EN JAVASCRIPT
/*
  Sintaxis:
    
    if (expresion_a_evaluar) 
    { Si es verdadera la expresión   }
    else 
        { en caso de ser falsa la expresión evaluada }

    
Cuando el resultado es una sola sentencia podemos omitir las llaves
pero cuando son mas de dos sentencia a ejecutar si es necesario el inficador
de bloque para el código.
Aunque es buena práctica indicar siempre el uso de las llaves
*/ 

let condicion = false;

// Podemos indicar las llaves 
if (condicion){
    console.log("La expresion es VERDADERA");
}
else {
    console.log("La expresión es FALSA");
}


// como solo se evalua una linea podemos omitir el uso de las llaves
if (condicion)
    console.log("La expresion es VERDADERA");
else 
    console.log("La expresión es FALSA");
