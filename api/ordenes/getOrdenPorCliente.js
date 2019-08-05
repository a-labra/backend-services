const Order = require('../models/Order');

function getOrdenPorCliente(req, res) {
    //res.send('Estoy respondiendo a un get');
    const { email } = req.body;
    Order.find()
    .then(function(docs){
        res.json({
          orders: docs
        })
    })
    .catch(function(err){
       res.json({
         error: err
       })
    })


  }

  module.exports = getOrdenPorCliente;
