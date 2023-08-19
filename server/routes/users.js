const express = require('express')
const jst = require('jsonwebtoken')
const UserSchema = require('../models/users')
const router = express()
require('dotenv/config')

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
router.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username, password });
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error('Error during login', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// User Registration
router.post('/api/register', async (req, res) => {
    try {
      const { name, surname, username, email, password } = req.body;
  
      const existingUser = await UserSchema.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(409).json({ message: 'Username or email already exists' });
      }
  
        const user = new UserSchema({... req.body})
        await user.save()
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


module.exports = router;