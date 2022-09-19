const fs = require("fs");

/* modulo FS (file system) todos los metodos son asincronos por defecto
si quieres modicar usan versiones sincronas agregando Sync como sufijo*/

/* fs.rename o fs.renameSync */

/* se puede leer, modificacr copiar eliminar cambiar nombre */

/* leer el archivo usando la codificacion elegida */

console.log('antes de leer');

/* fs.readFileSync("index.html", "utf-8", (err, done) => {
  if (err) throw err;
  console.log(done);
}); */
/* las versiones Sync no necesitan la callback xq se van ejecutar de manera sincrona */
const archivo = fs.readFileSync('index.html', 'utf-8')

console.log(archivo);
console.log('despues de leer');

/* cambiar nombre */

console.log('antes de rename');

fs.renameSync("index.html", "inde.html", (err) => {
  if (err) throw err;
});

console.log('despues de rename');

/* agregar contenido al final dearchivo con append */

console.log('antes de append');

fs.appendFileSync("index.html", "<p>Hola</p>", (err) => {
  if (err) {
    throw err;
  }
});

console.log('despues de append');

/* reemplazar todo el contenido del archivo */

console.log('antes de write');

fs.writeFileSync("index.html", "nuevo contenido", (err) => {
  if (err) {
    throw err;
  }
});
console.log('despues de write');

/* eliminar archivo */

console.log('antes de unlink');

fs.unlinkSync("index.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("archivo eliminado");
});

console.log('despues de unlink');