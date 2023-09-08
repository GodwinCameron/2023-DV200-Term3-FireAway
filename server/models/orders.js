const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    order: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model("Orders", OrderSchema)