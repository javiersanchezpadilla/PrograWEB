// OPERADOR LOGICO AND = &&
// Recordemos que un and (&&) es un producto 
// 1*1=1, 0*0=0, 1*0=0, 0*1=0  (1=true y 0=false)

let a = 5;
let val_min = 0, val_max = 10;

if (a >= val_min && a <= val_max) {
    console.log("Dentro del rango");
}
else {
    console.log("Fuera del rango");
}
