const express = require('express');
const router = express.Router();

const getColores = require('./getColores');
const createColor = require('./createColor');
const editColor = require('./editColor');
const removeColor = require('./removeColor');

router.put('/', editColor);
router.get('/', getColores);
router.post('/', createColor);

router.delete('/', removeColor);


module.exports = router;
