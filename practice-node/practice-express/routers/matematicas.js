const express = require('express')

const routerMatematicas = express.Router();

const {matematicas} = require('../datos/cursosDB.js').infoCursos;

//matematicas
routerMatematicas.get('/', (req, res)=>{res.send(JSON.stringify(matematicas))})

routerMatematicas.get('/:tema', (req, res)=>{
  const {tema} = req.params;
  const result = matematicas.filter(element => curso.element === tema)

  if(result.length === 0){
    res.status(404).send(`No se encontraron cursos de ${tema}`)
  }
  res.send(JSON.stringify(result))
})

module.exports = routerMatematicas;