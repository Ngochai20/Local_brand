const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosedelete = require('mongoose-delete');

mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Tintuc = new Schema(
    {
        name: { type: String },
        chitiet: { type: String },
        date: { type: String },
        image: { type: String },
        image1: { type: String },
        image2: { type: String },
        slug: { type: String },
        stt: { type: Number },
        chitiet2: { type: String }
    }, 
    {
        timestamps: true,
    }
);

// mongoose delete plugin
Tintuc.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});

module.exports = mongoose.model('Tintuc', Tintuc);