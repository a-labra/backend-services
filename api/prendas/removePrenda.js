const Prenda = require('../models/Prenda');

function removePrenda(req, res) {
  //res.send('Estoy respondiendo a un delete');
  const { tipo, precio, imagen } = req.body;

    Prenda.remove( { tipo, precio, imagen }
          )
    .then(function(result){
        res.json({
        message: 'Tipo de prenda eliminada correctamente'
        })
    })
    .catch(err => {
      res.send(err)
    })

}

module.exports = removePrenda;
