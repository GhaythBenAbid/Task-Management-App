//create user schema
var mongoose = require('mongoose');
const Collection = require('./Collection');
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

//delete collection when user is deleted
clientSchema.pre('remove', function (next) {
    Collection.deleteMany({ client_id: this._id }, function (err) {
        if (err) {
            next(err);
        }
    });
    next();
});


module.exports = mongoose.model('client' , clientSchema);