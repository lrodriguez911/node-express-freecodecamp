const http = require('http')

const server = http.createServer((req, res)=>{
    
    /* console.log(req.url);
    console.log(req.method);
    console.log(req.headers); */
    console.log(res.statusCode);

    res.setHeader('content-type', 'application/json')
    console.log(res.getHeaders());
    
    res.end('Hola mundo');
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server is listening http://127.0.0.1:${PORT}`);
})