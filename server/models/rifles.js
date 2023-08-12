const mongoose = require('mongoose')

const RifleSchema = mongoose.Schema({
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
    capacity: {
        type: Number,
        required: true
    },
    attachment: {
        type: String,
        required: false
    },

})

module.exports = mongoose.model("Rifles", RifleSchema)