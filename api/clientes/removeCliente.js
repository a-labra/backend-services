const Client = require('../models/Client');

function removeClient(req, res) {
    //res.send('Estoy respondiendo a un delete');
    const { nombre, apellido_paterno, apellido_materno,
            email, telefono, direccion, colonia,
            cp, delegacion_municipio, ciudad } = req.body;

      Client.remove( {nombre, apellido_paterno, apellido_materno,
              email, telefono, direccion, colonia,
              cp, delegacion_municipio, ciudad }
            )
      .then(function(result){
          res.json({
          message: 'Cliente eliminado correctamente'
          })
      })
      .catch(err => {
        res.send(err)
      })

  }

    module.exports = removeClient;
