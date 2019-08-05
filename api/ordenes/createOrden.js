const Order = require('../models/Order');

function createOrden(req, res) {
  //res.send('Estoy respondiendo a un post');
  const { fecha_orden,fecha_entrega,numero_prendas,cliente,orden } = req.body;
          //console.log(fecha_orden,fecha_entrega,numero_prendas,cliente,orden);
  const order = new Order ({ fecha_orden,fecha_entrega,numero_prendas,cliente,orden })
  return order.save()
  .then(function(result){
        res.json({
        message: 'Nueva orden insertada correctamente'
        })
    })
    .catch(err => res.status(400).json('Error al insertar orden'))
}

  module.exports = createOrden;
