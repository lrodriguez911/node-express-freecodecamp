const fs = require('fs')

/* modulo FS (file system) todos los metodos son asincronos por defecto
si quieres modicar usan versiones sincronas agregando Sync como sufijo*/

/* fs.rename o fs.renameSync */

/* se puede leer, modificacr copiar eliminar cambiar nombre */

fs.readFile('index.html', 'utf-8', (err, done) =>{
	if(err) throw err;
	console.log(done)
});

fs.rename('index.html', 'inde.html', (err, done) =>{
    if(err) throw err;
    return done
})