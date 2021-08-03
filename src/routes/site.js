const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/lien-he', siteController.lienhe);
router.get('/', siteController.trangchu);

module.exports = router;