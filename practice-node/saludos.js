function saludar(name) {
    return `Hola ${name}`
}
function saludarHolaMundo() {
    return `Hola Mundo`;
}

//una forma de exportar uno por uno los modulos
/* module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo; */

//como modulo.exports es un obj vacio se puede exportar agregrando como propiedad las funciones

module.exports = {
    saludar,
    saludarHolaMundo
}