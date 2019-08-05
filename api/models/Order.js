const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  fecha_orden:Date,
  fecha_entrega:Date,
  numero_prendas:Number,
  cliente:String,
  orden:[]
});

module.exports=mongoose.model('Order', orderSchema);
