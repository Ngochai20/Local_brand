/* const Shop = require('../models/Course');
const Catalog = require('../models/Cate');
const Product = require('../models/product'); */
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');


class SiteController {
    // [GET] /
    trangchu(req, res, next) {   
        res.render('trangchu');
    }
    lienhe(req, res, next) {   
        res.render('lienhe');
    }
}

module.exports = new SiteController();