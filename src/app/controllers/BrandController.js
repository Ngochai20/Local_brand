const Product = require('../models/brand');

const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { replaceOne } = require('../models/Course');


class BrandController {

    showbrand(req, res, next) {
        /* res.render('brands/brands'); */
        Product.find({})
            .then(brands => {
                res.render('brands/brands', { 
                    brands: mutipleMongooseToObject(brands)
                });
            })
            .catch(next);
    }
    showchitietbrand(req, res, next) {
        /* res.render('brands/chitietbrands'); */
        Product.findOne({ name: req.params.name }) //chi tiet san pham
            .then(brandss => {
                Product.find({})
                    .then(brands => {
                        res.render('brands/chitietbrands', { 
                            brands: mutipleMongooseToObject(brands),
                            brandss: mongooseToObject(brandss)
                        });                          
                    })
            })
            .catch(next);  
    }
}

module.exports = new BrandController;