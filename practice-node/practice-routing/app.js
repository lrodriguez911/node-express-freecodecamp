const http = require("http");
const PORT = 3000;
const cursos = require("./cursos");

function manejarMethodGET(req, res) {
  const path = req.url;

  if (path === "/") {
    res.writeHead(200, { "Content-type": "application/json" });
    //res.statusCode = 200;
    return res.end(JSON.stringify("Bienvenidos a mi server y API creado con NODE.JS"));
  } else if (path === "/cursos") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === "/cursos/programacion") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  } else if (path === "/cursos/matematicas") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.matematicas));
  }
  res.statusCode = 404;
  console.log(res.statusCode);
  return res.end("El recurso solicitado no existe");
}

function manejarMethodPOST(req, res) {

  const path = req.url;
 
  if (path === "/cursos/programacion") {
    res.statusCode = 200;
    let cuerpo = '';

    req.on('data', content =>{
      cuerpo += content.toString();
    })
  
    req.on('end', () =>{
      console.log(cuerpo);
      console.log( typeof cuerpo);
      cuerpo = JSON.parse(cuerpo);
      console.log( typeof cuerpo);
      console.log(cuerpo.titulo);

      return res.end(`El server recibio una solicitud POST en ${path}`)
    })
    //return res.end(`El server recibio una solicitud POST en ${path}`);
  }
  res.statusCode = 404;
  res.end("No se pudo guardar la solicitud");
}
const server = http.createServer((req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return manejarMethodGET(req, res);
    case "POST":
      return manejarMethodPOST(req, res);
    case "DELETE":
      break;
    default:
      res.statusCode = 501;
      res.end(
        `el metodo usado no puede ser manejado por el servidor ${method}`,
      );
  }
});
server.listen(PORT, () => {
  console.log(`El server esta escuchando en el puerto: ${PORT}`);
});
