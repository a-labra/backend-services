const Color = require('../models/Color');

function removeColor(req, res) {
    //res.send('Estoy respondiendo a un delete');
    const { desc_color } = req.body;
    Color.findOne( {desc_color} )
      .then(foundColor => {
        return foundColor.remove()
      })

      .then(removedColor => {
          res.status(200).json({
            msg:"Color eliminado",
            color: removedColor
          })
      })
      .catch(err => {
        res.send(err)
      })

  }

    module.exports = removeColor;
