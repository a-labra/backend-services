const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
  nombre:String,
  apellido_paterno:String,
  apellido_materno:String,
  email:{ type: String, unique: true},
  telefono:String,
  direccion:String,
  colonia:String,
  cp:String,
  delegacion_municipio:String,
  ciudad:String,
  password:String
});

module.exports=mongoose.model('Client', clienteSchema);
