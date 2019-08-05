const express = require('express');
const router = express.Router();

const getClientes = require('./getClientes');
const createCliente = require('./createCliente');
const editCliente = require('./editCliente');
const removeCliente = require('./removeCliente');

router.get('/', getClientes);
router.post('/', createCliente);
router.put('/', editCliente);
router.delete('/', removeCliente);

module.exports = router;