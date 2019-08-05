const Color = require('../models/Color');

function editColor(req, res) {
      // Primero elimina registro
      const { desc_color, new_desc_color } = req.body;
      Color.findOne( {desc_color} )
        .then(foundColor => {
          return foundColor.remove()
        })
      // Después agrega nuevo registro
        .then(function(result){
          Color.save()
            .then(function(result){
                res.json({
                  message: 'Color actualizado correctamente'
                })
            })
            .catch(err => res.status(400).json('Error en la accualizacion'))

        })
}

module.exports = editColor;

/* Este código no funcionó
res.send('Estoy respondiendo a un put');
  const { desc_color, new_desc_color } = req.body;

  Color.findOne( {desc_color} )
    .then(foundColor => {
      foundColor.desc_color = new_desc_color
      return foundColor.save()
    })
    .then(updatedColor => {
        res.status(200).json({
          msg:"Color actualizado",
          color: updatedColor
        })
    })
    .catch(err => {
      res.send(err)
    })


  console.log("Color actual = " + desc_color);

}

*/
