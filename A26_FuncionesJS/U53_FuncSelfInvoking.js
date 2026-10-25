/* FUNCIONES DEL TIPO SELF INVOKIN.

Son funciones que se mandan a llamar a si mismas
Es de la familia de las funciones anonimas, pero además se puede mandar a
llamar a si misma

1. Llamar a la funcion que no tiene parametros
-----------------------------------------------
        ( funtion () {  instrucciones; })():

2. Función con parámetros.        
--------------------------
        ( funtion (parametros) {  instrucciones; })(argumentos):

*/ 


// no tiene nombre, ni se asigna a ninguna variable
// solo se puede mandar a llamar una sola vez comunmente al inicio de un
// carga de programa, no se puede mandar a llamar por segunda vez
(function (){
    console.log("Ejecutando la funcion self-invoking sin parametros");
})();       // como no tiene parametros,la llamada no contiene argumentos


(function (a, b){
    console.log("Ejecutando la funcion self-invoking con parametros");
})(10, 80); // como tiene dos parametros,la llamada contiene dos argumentos
