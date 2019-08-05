const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
  desc_material:{ type: String, unique: true}

});
//Nombre de coleccion = materiales
module.exports=mongoose.model('Material', materialSchema);
