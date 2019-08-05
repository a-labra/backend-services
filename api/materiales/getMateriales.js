const Material = require('../models/Material');

function getMateriales(req, res) {
  //res.send('Estoy respondiendo a un get de materiales');
  Material.find()
    .then(function(docs){
      res.json({
        materials: docs
      })
    })
    .catch(function(err) {
      res.json({
        error: err
      })
    })
}
  module.exports = getMateriales;
