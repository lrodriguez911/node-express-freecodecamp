const http = require('http')
const PORT = 3000
const cursos = require('./cursos')

function manejarMethodGET(req, res) {
    const path = req.url;
    if(path === '/'){
        res.statusCode = 200;
        res.end('Bienvenidos a mi server y API creado con NODE.JS')
    } else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos))
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion))
    }else if(path === '/cursos/matematicas'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.matematicas))
    }
}

function manejarMethodPOST(req, res) {
    const path = req.url;
    if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end(`El server recibio una solicitud POST en ${path}`)
    }
}
const server = http.createServer((req, res) => {
    const {method} = req;
    switch (method) {
        case 'GET':
            return manejarMethodGET(req, res);
        case 'POST':
            return manejarMethodPOST(req, res);
        /* case 'PUT':
            
            break; */
        default:
            console.log(`el metodo usado no puede ser manejado por el servidor ${method}`);
    }
})
server.listen(PORT, ()=>{
    console.log(`El server esta escuchando en el puerto: ${PORT}`);
})
