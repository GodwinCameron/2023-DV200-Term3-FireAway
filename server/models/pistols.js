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
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 1
    },
    image: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false,
        default:
          "Bringing you one of FireAway's finest! We assure high quality and durability for each and every one of our products, making this firearm a must have for any gun enthusiast, emplored by the best of the best!",
      },

})

module.exports = mongoose.model("Pistols", PistolSchema)