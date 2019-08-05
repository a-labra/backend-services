const express = require('express');
const router = express.Router();

const getPrendas = require('./getPrendas');
const createPrenda = require('./createPrenda');
const editPrenda = require('./editPrenda');
const removePrenda = require('./removePrenda');

router.get('/', getPrendas);
router.post('/', createPrenda);
router.put('/', editPrenda);
router.delete('/', removePrenda);


module.exports = router;