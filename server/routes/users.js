const express = require('express')
const UserSchema = require('../models/users')
const router = express()

//Add a User
router.post('/api/addUser/', async (req, res) => {
    const user = new UserSchema({... req.body})
    await user.save()
        .then(response => res.json(response) )
        .catch(error => res.status(500).json(error))
})

//Get all
router.get('/api/getUsers/', async (req, res) => {
    const findUser = await UserSchema.find()
    res.json(findUser)
})

// Login User

router.post('/api/loginUser', async (req, res) => {
    const findUser = await UserSchema.findOne({
        email: req.body.email,
    })
    console.log(findUser);
    if (findUser != null) {
        if (findUser.password === req.body.password) {
            res.json("User Logged in")
        } else {
            res.json("Email and Password does not match")
        }
    } else {
        res.json("user not found")
    }
})

module.exports = router;