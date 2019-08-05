const Client = require('../models/Client');
const bcrypt = require('bcrypt');

function createCliente(req, res) {
const { nombre, apellido_paterno, apellido_materno,
        email, telefono, direccion, colonia,
        cp, delegacion_municipio, ciudad, password} = req.body;
        //console.log(req.body);
        if( !nombre || !apellido_paterno || !apellido_materno
          || !email || !telefono || !direccion || !colonia
          || !cp || !delegacion_municipio || !password ){
              res.status(400).json({msg: "Dato de entrada faltante, verifique"})
              return
            }
            bcrypt.hash(password,3)
              .then(hash => {
                  const client = new Client({nombre, apellido_paterno, apellido_materno, email,
                    telefono, direccion, colonia, cp, delegacion_municipio, ciudad, password: hash})
                  return client.save()
              })
              .then(client => {
                  res.json(client)
              })
              .catch(err => res.status(400).json('Correo ya existe, verifique o elija otro correo'))

  }

  module.exports = createCliente;
