const express = require('express');
const router = express.Router();

const getMateriales = require('./getMateriales');
const createMaterial = require('./createMaterial');
const removeMaterial = require('./removeMaterial');
//const editMaterial = require('./editMaterial');

router.get('/', getMateriales);
router.post('/', createMaterial);
router.delete('/', removeMaterial);
//router.put('/', editMaterial);

module.exports = router;
