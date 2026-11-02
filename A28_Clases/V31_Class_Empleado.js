/* EJERCICIO DE HERENCIA CREACIÓN DE LA CLASE EMPLEADO

Realizar el siguiente ejercicio, vamos a usar un objeto del tipo Date
let la_fecha = new Date();
                                            ||||||||||||||||||||||
                                            ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
+---------------------+                     +---------------------+
|       Persona       |                     |       Empleado      |
+---------------------+                     +---------------------+
| _id_persona: number |                     | _id_empleado: Long  | 
| _nombre: string     |    << Extends >>    | _sueldo: number     | 
| _apellido: string   | <------------------ +---------------------+
| _edad: number       |                     | get_id_empleado()   |
| contador_personas   |                     | get_sueldo()        |
+---------------------+                     | set_sueldo()        |
| get_id_persona()    |                     | toString()          |
| get_nombre()        |                     +---------------------+
| set_nombre()        |
| get_apellido        |                     +---------------------------+
| set_apellido()      |    << Extends >>    |          Cliente          |
| set_edad()          | <------------------ +---------------------------+
| set_edad()          |                     | _id_cliente(): number     |
| toString()          |                     | _fecha_regisro: Date      |
+---------------------+                     +---------------------------+
                                            | get_id_cliente()          |
                                            | get_fecha_registro()      |
                                            | set_fecha_registro(Date)  |
                                            | toString()                |
                                            +---------------------------+
*/          

class Empleado extends Persona {

    static contador_empleados;

}