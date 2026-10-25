/* DISTINTAS FORMAS DE IMPRIMIR UN OBJETO

*/ 

let persona = {
    nombre: 'Karla',
    apellido: 'Sánchez',
    email: 'karlas@mail.com',
    edad: 30,
    nombre_completo: function(){
        return this.nombre + ' ' + this.apellido
    }
}
