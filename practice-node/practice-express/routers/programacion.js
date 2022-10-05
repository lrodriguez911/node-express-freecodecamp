const express = require('express')

const routerProgramacion = express.Router();

const {programacion} = require('../datos/cursosDB.js').infoCursos;

//programacion
routerProgramacion.get('/', (req, res)=>{res.send(JSON.stringify(programacion))})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const {lenguaje} = req.params
  const result = programacion.filter(curso => curso.lenguaje === lenguaje)

  if(result.length === 0 ){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`)
  }
  ordenarVistas(result, req, res)

  /* res.send(JSON.stringify(result)) */
})

routerProgramacion.get('/:lenguaje/:nivel',(req, res)=>{
  const {lenguaje} = req.params;
  const {nivel} = req.params;
  const result = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel )

  if(result.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} con el nivel:${nivel}.`)
  }
  res.send(JSON.stringify(result))
})

module.exports = routerProgramacion;