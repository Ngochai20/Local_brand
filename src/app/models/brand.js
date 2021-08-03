const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosedelete = require('mongoose-delete');

mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Product = new Schema(
    {
        name: { type: String },
        image: { type: String },
        description: { type: String },
        address: { type: String },
        website: { type: String },
        facebook: { type: String },
        instagram: { type: String },
        youtube: { type: String },
        tiktok: { type: String },
        showHide: { type: String },
        status: { type: String },

        /* slug: { type: String, slug: 'name', unique: true } */
    }, 
    {
        timestamps: true,
    }
);

// mongoose delete plugin
Product.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});

module.exports = mongoose.model('Product', Product);