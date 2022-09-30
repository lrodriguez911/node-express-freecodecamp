const express = require('express');

const app = express();
const {infoCursos} = require('./cursosDB.js')

app.get('/', (req, res) => res.json({"hola": "saludos"}))