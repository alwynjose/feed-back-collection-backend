const mongoose = require('mongoose');
//const Schema = mongoose.Schema; // destructure to the the below D1
const { Schema } = mongoose; // D1 // mongoose wants to know all the properties that our records will have in the database

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema); // two argument means we are loading schema INTO mongoose