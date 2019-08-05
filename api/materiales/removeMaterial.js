const Material = require('../models/Material');

function removeMaterial(req, res) {
  //res.send('Estoy respondiendo a un delete de materiales');
  const { desc_material } = req.body;
  Material.findOne( {desc_material} )
    .then(foundMaterial => {
      return foundMaterial.remove()
    })

    .then(removedMaterial => {
        res.status(200).json({
          msg:"Material eliminado",
          material: removedMaterial
        })
    })
    .catch(err => {
      res.send(err)
    })

}
  module.exports = removeMaterial;
