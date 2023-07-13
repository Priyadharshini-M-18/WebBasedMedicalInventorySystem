var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Orders = new Schema({

    email: {
        type: String,
        required: true
    },
    order_prd_name: {
        type: String,
        required: true
    },
    
    order_prd_qnty: {
        type: Number,
        required: true
    },
    order_cost: {
        type: Number,
        required: true
    },
    paid_status:{
        type:Boolean,
        require:true
    },
    date:{
        type:String,
        require:true
    }
    


});

module.exports = mongoose.model('Order', Orders);