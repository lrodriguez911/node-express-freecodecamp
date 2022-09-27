const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (efectivo, total)=> {
  let vuelto = efectivo - total;
  console.log(`Usted pago $${efectivo}, su compra por monto $${total}, su vuelto es $${vuelto}`);
})

emisorProductos.emit('compra', 5000 , 4000);
