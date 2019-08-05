const mongoose = require('mongoose');

const colorSchema = mongoose.Schema({
  desc_color:{ type: String, unique: true}

});
//Nombre de coleccion = colores
module.exports=mongoose.model('Color', colorSchema);
