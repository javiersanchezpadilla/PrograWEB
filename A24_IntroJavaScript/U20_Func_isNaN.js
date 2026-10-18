// FUNCION IS NOT A NUMBER() isNaN()
// Valida si el contenido aun siendo cadena contiene un numero
// quiere decir que el valor no es un numero (valor numerico)
// isNaN()     is not a number?

// En este ejemplo en caso de no ser un numero no se evalua la edad para votar
// pero en caso de SI SER UN NUMERO se ejecuta la comparación 

let mi_valor = "18x";          // parece numero per la "x" lo define como str

let edad = Number(mi_valor);
console.log(edad);              // Resultado NaN (Not a number)

if (isNaN(edad)) {              // si no es un numero aquí termina
    console.log("No es un número");
}
else {                          // Si es numero entonces evalua si puede votar
    if (edad >= 18) {           // si es mayor de 18 años puede votar
    console.log("Puede votar");
    }
    else {                      // en otro caso no puede votar
        console.log("Muy joven para votar");
    }
}

// LA MISMA SOLUCIÓN mediante el uso del operador ternario
if (isNaN(edad)) {              // si no es un numero aquí termina
    console.log("No es un número");
}
else {                          // Si es numero entonces evalua si puede votar
    let resultado = edad >= 18 ? "Puede votas" : "Muy joven para votar";
    console.log(resultado);
}
