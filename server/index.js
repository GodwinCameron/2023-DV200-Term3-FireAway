const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const pistolRoute = require('./routes/pistols')
const userRoute = require('./routes/users')
const rifleRoute = require('./routes/rifles')

require('dotenv/config')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(pistolRoute)
app.use(userRoute)
app.use(rifleRoute)


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'FireAway', //Collection Name
}).then(() => console.log("Connected to FireAway DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server Started on port:${PORT}`)});

