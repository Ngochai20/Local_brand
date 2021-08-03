const express = require('express');
const router = express.Router();
const brandController = require('../app/controllers/BrandController');
//NewController.index
router.get('/', brandController.showbrand);
router.get('/:name', brandController.showchitietbrand);

module.exports = router;