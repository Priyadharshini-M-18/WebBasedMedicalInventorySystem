var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sold = new Schema({


    prd_id: {
        type: String,
        required: true
    },
    
    prd_qnty: {
        type: Number,
        required: true
    },
   sold: {
        type: Number,
        required: true
    }
    


});

module.exports = mongoose.model('Sold', Sold);