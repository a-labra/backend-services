const Prenda = require('../models/Prenda');

function createPrenda(req, res) {
    //res.send('Estoy respondiendo a un post');
    const { tipo, precio, imagen} = req.body;
    if( !tipo || !precio || !imagen){
          res.status(400).json({msg: "Dato de entrada faltante, verifique"})
          return
        }
    const prenda = new Prenda({ tipo, precio, imagen })
        return prenda.save()

    .then(function(result){
        res.json({
          message: "Nueva prenda insertada correctamente"
        })
    })
    .catch(err => res.status(400).json('Tipo de prenda ya existe, verifique'))
/*
newColor.save()
  .then(function(result){
      res.json({
        message: 'Nuevo color insertado correctamente'
      })
  })
  .catch(err => res.status(400).json('El color ya existe'))
*/

  }

  module.exports = createPrenda;
