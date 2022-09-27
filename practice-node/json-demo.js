/* const curso = require('./json-demo.json');

console.log(curso.titulo) */

let infoCurso = {
    "titulo" : "Aprende Node.js",
    "numVistas" :45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico" : true
}
/* cadena de caracteres en formato JSON */
let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// Cadenade caracteres -> Objeto

let infoCursoObjeto = JSON.parse(infoCursoJSON)

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);


