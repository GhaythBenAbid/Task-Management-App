//create user schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var clientSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('client' , clientSchema);