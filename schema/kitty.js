const mongoose = require("mongoose")
const { Schema } = mongoose;

const kittySchema = new Schema({
    title: String,
    gender: String,
})

module.exports = mongoose.model('Kitty', kittySchema)