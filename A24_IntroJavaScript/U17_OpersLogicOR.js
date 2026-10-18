// OPERADOR LOGICO OR = ||
// Recordemos que un or (||) es una suma
// 1+1=1, 0+0=0, 1+0=1, 0+1=1  (1=true y 0=false)

let vacaciones = true, dia_descanso = false;

if (vacaciones || dia_descanso) {
    console.log("El padre puede asistir al juego del hijo");
}
else {
    console.log("El padre está ocupado");
}
