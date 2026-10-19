/*  USO DEL SWITCH 

Sintaxis:

    Inicio
      |
      |
    Expresion ---+---->  caso 1  --->  Sentencia 1 
                 |                     break;  -------+
                 |                                    |
                 +---->  caso 2  --->  Sentencia 2    |
                 |                     break;  -------+
                 |                                    |
                 +---->  caso 3  --->  Sentencia 3    |
                                       break;  -------+
                                                      |         
                                                      ▼
                                                     FIN


LA COMPARACIÓN DE SWITCH ES DEL TIPO ESTRICTO (VALOR Y TIPO DE DATO)
--------------------------------------------------------------------
No podemos comparar valores sin evaluar el tipo de dato
*/ 

let numero = 4;
let numero_texto = 'Valor desconocido';

switch (numero){
    case 1: numero_texto = 'Número uno';
            break;
    case 2: numero_texto = 'Número dos';
            break;
    case 3: numero_texto = 'Número tres';
            break;
    case 4: numero_texto = 'Número cuatro';
            break;
    default: numero_texto = 'Opción no valida'
}

console.log(numero_texto);
