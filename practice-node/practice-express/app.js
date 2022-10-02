const express = require('express');

const app = express();
const {infoCursos} = require('./cursosDB.js')

app.get('/', (req, res) => res.send('Hola a todos usando res.send saludos a todos.'))

app.get('/api/cursos', (req, res)=>{res.send(JSON.stringify(infoCursos))})

app.get('/api/cursos/programacion', (req, res)=>{res.send(JSON.stringify(infoCursos.programacion))})

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
  const {lenguaje} = req.params
  const result = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje)

  if(result.length === 0 ){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`)
  }
  res.send(JSON.stringify(result))
})

app.get('/api/cursos/matematicas', (req, res)=>{res.send(JSON.stringify(infoCursos.matematicas))})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server listening in ${PORT}`);
})