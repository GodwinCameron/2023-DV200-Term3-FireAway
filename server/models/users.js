const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: { 
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wallet: {
        type: Number,
        required: true,
        default: 150000
    },
    superuser: {
        type: Boolean,
        required: true,
        default: false
    },
});

module.exports = mongoose.model("User", UserSchema);

