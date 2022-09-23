/* const promesaCumplida  = true;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa Cumplida')
        }else{
            reject('Promesa rechazada')
        }
    }, 2000)
})

const manejarPromesaCumplida = (value) => {
    console.log(value);
}

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
}
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada) */


const estatusPedido = ()=>{
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
}
/* for (let i = 0; i < 10; i++) {
    estatusPedido()
} */
const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (estatusPedido()) {
            resolve('Pizza en camino')
        } else {
            reject('Su pedido fue rechazado por falta de fondos')
        }
    },1000)
})

/* const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
}
const rechazarPedido = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
}
miPedidoDePizza.then(manejarPedido, rechazarPedido) */

/* miPedidoDePizza.then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)}).then(null,(mensajeDeRechazo) => {
        console.log(mensajeDeRechazo);
    } ) */

miPedidoDePizza.then((mensajeDeConfirmacion)=>{
 console.log(mensajeDeConfirmacion);
}).catch((mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
})

/* miPedidoDePizza.then(manejarPedido).catch(rechazarPedido) */