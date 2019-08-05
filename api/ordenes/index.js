const express = require('express');
const router = express.Router();

const getOrdenPorCliente = require('./getOrdenPorCliente');
const createOrden = require('./createOrden');
//const editOrden = require('./editOrden');
const removeOrden = require('./removeOrden');

router.get('/', getOrdenPorCliente);
router.post('/', createOrden);
//router.put('/', editOrden);
router.delete('/', removeOrden);


module.exports = router;
