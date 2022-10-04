const express = require('express');

const app = express();
const {infoCursos} = require('./cursosDB.js')

app.get('/', (req, res) => res.send('Hola a todos usando res.send saludos a todos.'))

app.get('/api/cursos', (req, res)=>{res.send(JSON.stringify(infoCursos))})

function ordenarVistas(aOrdenar, req, res) {
  if(req.query.ordenar === 'vistas'){
    return res.send(JSON.stringify(aOrdenar.sort((a,b) => a.vistas - b.vistas)))
  }
  return res.send(JSON.stringify(aOrdenar.sort((a,b) => b.vistas - a.vistas)))
}

//programacion
app.get('/api/cursos/programacion', (req, res)=>{res.send(JSON.stringify(infoCursos.programacion))})

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
  const {lenguaje} = req.params
  const result = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)

  if(result.length === 0 ){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`)
  }
  ordenarVistas(result, req, res)

  /* res.send(JSON.stringify(result)) */
})

app.get('/api/cursos/programacion/:lenguaje/:nivel',(req, res)=>{
  const {lenguaje} = req.params;
  const {nivel} = req.params;
  const result = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel )

  if(result.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} con el nivel:${nivel}.`)
  }
  res.send(JSON.stringify(result))
})


//matematicas
app.get('/api/cursos/matematicas', (req, res)=>{res.send(JSON.stringify(infoCursos.matematicas))})

app.get('/api/cursos/matematicas/:tema', (req, res)=>{
  const {tema} = req.params;
  const result = infoCursos.matematicas.filter(element => curso.element === tema)

  if(result.length === 0){
    res.status(404).send(`No se encontraron cursos de ${tema}`)
  }
  res.send(JSON.stringify(result))
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server listening in ${PORT}`);
})