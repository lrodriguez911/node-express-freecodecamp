//se puede importar usando require
const saludar = require('./saludos.js')
// se puede importar unando desestructuracion de objs para llamar directamente el metodo
const {saludarHolaMundo} = require('./saludos.js')


//sin usar desestructuracion
console.log(saludar.saludar('lucas'))

//usando desestructuracion
console.log(saludarHolaMundo('lucas'))