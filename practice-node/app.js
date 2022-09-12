//se puede importar usando require
/* const saludar = require('./saludos.js') */
// se puede importar unando desestructuracion de objs para llamar directamente el metodo
/* const {saludarHolaMundo} = require('./saludos.js') */


//sin usar desestructuracion
/* console.log(saludar.saludar('lucas')) */

//usando desestructuracion
/* console.log(saludarHolaMundo('lucas')) */

//modulos built-in (incorporados sin necesidad de instalar o requerir(importar))
// http, https, fs(file-system), os(operating system), path(link, way, route)

//modulo console
/* console.log('Hola console')

console.warn('advertencia')

console.error(new Error('ocurrio un error')); */

//console.assert(1 > 0, 'hola')

//console.table()


//modulo process

/* console.log(process)

console.log(process.env) */

/* console.log(process.argv)
for (const i of process.argv) {
    console.log(i)
} */

console.log(process.memoryUsage());