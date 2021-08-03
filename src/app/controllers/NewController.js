const Tintuc = require('../models/tintuc');
/* const Catalog = require('../models/Cate'); */
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const PAGE_SIZE = 6;

class NewController {
    tintuc(req, res, next){
        /* res.render('tintuc/tintuc'); */
        var sort1 = {stt: 1};
        Tintuc.find({}).sort(sort1).limit(4)
            .then(tintucs => {
                var sort2 = {stt: -1};
                Tintuc.find({}).sort(sort2).limit(2)
                    .then(tintuc2 => {
                        res.render('tintuc/tintuc', { 
                            tintucs: mutipleMongooseToObject(tintucs),
                            tintuc2: mutipleMongooseToObject(tintuc2)
                        });                          
                    })  
            })
            .catch(next);
    }
    chitiettintuc(req, res, next) {
        /* res.render('tintuc/chitiettintuc');  */   
        Tintuc.findOne({ slug: req.params.slug }) //chi tiet san pham
            .then(tintucs => {
                res.render('tintuc/chitiettintuc', { 
                    tintucs: mongooseToObject(tintucs)
                });
            })
            .catch(next);
    }
}

module.exports = new NewController;