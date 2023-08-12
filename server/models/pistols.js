const mongoose = require('mongoose')

const PistolSchema = mongoose.Schema({
    make: {
        type: String,
        required: false
    },
    model: {
        type: String,
        required: true
    },
    calibre: {
        type: String,
        required: true
    },
    frame: {
        type: String,
        required: false
    },
    attachment: {
        type: String,
        required: false
    },

})

module.exports = mongoose.model("Pistols", PistolSchema)