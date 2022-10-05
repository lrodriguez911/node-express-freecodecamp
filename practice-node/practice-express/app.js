const express = require('express');

const app = express();

const {infoCursos} = require('./datos/cursosDB.js')

//Routers

const routerProgramacion = require('./routers/programacion.js')

app.use('/api/cursos/programacion', routerProgramacion)

const routerMatematicas = require('./routers/matematicas.js')

app.use('/api/cursos/matematicas', routerMatematicas)

app.get('/', (req, res) => res.send('Hola a todos usando res.send saludos a todos.'))

app.get('/api/cursos', (req, res)=>{res.send(JSON.stringify(infoCursos))})

//function to order views
function ordenarVistas(aOrdenar, req, res) {
  if(req.query.ordenar === 'vistas'){
    return res.send(JSON.stringify(aOrdenar.sort((a,b) => a.vistas - b.vistas)))
  }
  return res.send(JSON.stringify(aOrdenar.sort((a,b) => b.vistas - a.vistas)))
}





const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server listening in ${PORT}`);
})