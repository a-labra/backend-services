const Material = require('../models/Material');

function createMaterial(req, res) {
  //res.send('Estoy respondiendo a un post de materiales');
  const newMaterial = new Material({
    desc_material:req.body.desc_material
  });
  //console.log(req);
  //console.log(newMaterial);
  newMaterial.save()
    .then(function(result){
        res.json({
          message: 'Nuevo tipo de material insertado correctamente'
        })
    })
    .catch(err => res.status(400).json('El tipo de material ya existe'))
}
  module.exports = createMaterial;
