const mongoose = require("mongoose")

const kittySchema = new mongoose.Schema({
    title: String,
    gender: String,
})

module.export = mongoose.model('Kitty', kittySchema)