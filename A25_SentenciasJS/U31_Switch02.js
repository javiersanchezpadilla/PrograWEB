// EJERCICIO DE IF ELSE 
// Con base a un mes deerminaremos a que estación del año corresponde
// En este ejemplo los casos estan agrupados varios cases por linea
// case 1: case 2: case 3:  

let mes = 4;        // Abril
let estacion;

switch (mes) {
    case 1: case 2: case 12:  estacion = "Invierno";
                              break;
    case 3: case 4: case 5:  estacion = "Primavera";
                              break;
    case 6: case 7: case 8:  estacion = "Verano";
                              break;
    case 9: case 10: case 11:  estacion = "Otoño";
                              break;
    default: estacion = "Valor incorrecto"; 
}

console.log(estacion);
   