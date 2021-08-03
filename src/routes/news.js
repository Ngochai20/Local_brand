const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/NewController');
//NewController.index
router.get('/:slug', newController.chitiettintuc);
router.get('/', newController.tintuc);

module.exports = router;