var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Stock = new Schema({

    name: {
        type: String,
        required: true,

    },
    
    id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    sold:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    man_date:{
        type:String,
        required:true
    },
    exp_date:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Stock', Stock);