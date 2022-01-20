const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SocialMediaApp' , () => {
    console.log('connected to mongodb');
});


app.use('/api/auth', require('./routes/auth'));
app.use('/api/collection', require('./routes/collection'));




//run on port 5000
app.listen(5000, () => {
    console.log("server is running on port 5000");
});