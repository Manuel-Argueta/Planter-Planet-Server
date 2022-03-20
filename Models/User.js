const mongoose = require("mongoose");

const User = new mongoose.Schema({
    username: String,
    logOns: Number,
}, {timestamps: true});

const userModel = mongoose.model('users', User);

module.exports = userModel;