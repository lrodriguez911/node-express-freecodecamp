function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando el ${producto}`);
        setTimeout(() => {
            if (producto === 'taza') {
                resolve('ordenando Producto')
            } else {
                reject('Producto no disponible')
            }
        }, 2000);
    });
}

function procesarPedido(respuesta) {
    return new Promise((reso, reject) => {
        console.log('Procesando respuesta ...');
        console.log(`La respuesta fue "${respuesta}"`);
        setTimeout(() => {
            reso('Gracias por su compra. Disfrute su producto')
        }, 4000);
    })
}


/* ordenarProducto('lapiz')
.then(respuesta => {
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta)
})
.then(respuestaProcesada => {
    console.log(respuestaProcesada);
}).catch(err => {
    throw console.log(err);
}) */

/* using async await */


