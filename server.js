const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const mongoose = require('mongoose');

const apiFiles = require('./api');
app.use('/api', apiFiles);

//const cors = require('cors');

// Inicia server
app.listen(process.env.PORT, function() {
  console.log('Se inició el servidor en el puerto ' + process.env.PORT);
  console.log(`http://localhost:${process.env.PORT}`);
})

//Para conectarnos a la BD

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(function(result) {
    console.log('connected with mongo');
  })
  .catch(function(err){
    console.log(err);
  })
