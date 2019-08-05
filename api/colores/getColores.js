const Color = require('../models/Color');

function getColores(req, res) {
  //console.log(Color);
  Color.find()
    .then(function(docs){
      res.json({
        colores: docs
      })
    })
    .catch(function(err) {
      res.json({
        error: err
      })
    })
}

module.exports = getColores;
