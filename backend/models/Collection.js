const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CollectionSchema = new Schema({
    collection_name : {
        type : String,
        required : true,
    },
    icon : {
        type : String,
        required : true,
    },
    client_id : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'client'

    },
});

module.exports = mongoose.model('Collection', CollectionSchema);