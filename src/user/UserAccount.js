var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserAccount = new Schema({
    
    email: {
        type: String,
        required: true
    },
    
    amount: {
        type: Number,
        required: true
    }
    


});

module.exports = mongoose.model('UserAccount', UserAccount);