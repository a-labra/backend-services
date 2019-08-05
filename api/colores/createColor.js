const Color = require('../models/Color');

function createColor(req, res) {
    const newColor = new Color({
      desc_color:req.body.desc_color
    });
    //console.log(req);
    //console.log(newColor);
    newColor.save()
      .then(function(result){
          res.json({
            message: 'Nuevo color insertado correctamente'
          })
      })
      .catch(err => res.status(400).json('El color ya existe'))
  }

  module.exports = createColor;
