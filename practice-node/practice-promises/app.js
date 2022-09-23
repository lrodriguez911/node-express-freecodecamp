function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando : ${producto}`);
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
    return new Promise((resolve, reject) => {
        console.log('Procesando respuesta ...');
        console.log(`La respuesta fue "${respuesta}"`);
        setTimeout(() => {
          resolve('Gracias por su compra. Disfrute su producto')
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

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto)
    console.log('Respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta)
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}
realizarPedido('lapiz')