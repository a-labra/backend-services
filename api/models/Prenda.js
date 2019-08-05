const mongoose = require('mongoose');

const prendaSchema = mongoose.Schema({
  tipo:{ type: String, unique:true },
  precio:Number,
  imagen:String
});

module.exports=mongoose.model('Prenda', prendaSchema);
