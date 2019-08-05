const Prenda = require('../models/Prenda');

function getPrendas(req, res) {
    //res.send('Estoy respondiendo a un get');
    Prenda.find()
    .then(function(docs){
      res.json({
        prendas: docs
      })
    })
    .catch(function(err) {
      res.json({
        error: err
      })
    })
  }

module.exports = getPrendas;
