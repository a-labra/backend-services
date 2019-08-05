const express = require('express');
const router = express.Router();
const cors = require('cors'); //Cuando marca error de seguridad


router.use(express.json());
router.use(cors());
// Guarda en variables el contenido de archivo (api)
const clientes = require('./clientes');
const colores = require('./colores');
const ordenes = require('./ordenes');
const prendas = require('./prendas');
const materiales = require('./materiales');

//Responde una petición de cierta url con la variable
router.use('/clientes', clientes);
router.use('/colores', colores);
router.use('/ordenes', ordenes);
router.use('/prendas', prendas);
router.use('/materiales', materiales);





//Regresa las distintas rutas de mi api
/******************************   clientes */
router.use('/', function(request, response) {
  response.json({
    "clientes": `http://localhost:1680/api/clientes`
  })
});

/******************************   colores */
router.use('/', function(request, response) {
  response.json({
    "colores": `http://localhost:1680/api/colores`
  })
});

/******************************   ordenes */
router.use('/', function(request, response) {
  response.json({
    "ordenes": `http://localhost:1680/api/ordenes`
  })
});

/******************************   prendas */
router.use('/', function(request, response) {
  response.json({
    "prendas": `http://localhost:1680/api/prendas`
  })
});

/******************************   materiales */
router.use('/', function(request, response) {
  response.json({
    "materiales": `http://localhost:1680/api/materiales`
  })
});


// Exporta una variable o función como resultado del archivo
module.exports = router;
