const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    password: String,
    email: String,
    name: String,
    birthdate: Date,
    geneder: String,
    location: String,
});

module.exports = model('users', userSchema);