const Client = require('../models/Client');

function getClientes(req, res) {
    Client.find()
    .then(function(docs){
        res.json({
          clients: docs
        })
    })
    .catch(function(err){
       res.json({
         error: err
       })
    })

  }

  module.exports = getClientes;
