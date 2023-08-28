const express = require('express')

const RifleSchema = require('../models/rifles');

const router = express();

//Read all
router.get('/api/rifles', async(req, res) =>{
    const findRifle = await RifleSchema.find()
    res.json(findRifle)
})

//Read one
router.get('/api/rifle/:id', async (req, res) => {
    const findRifle = await RifleSchema.findById(req.params.id)
    res.json(findRifle)
})

//Create
router.post('/api/rifle', async (req,res) => {
    const rifle = new RifleSchema({...req.body})
    await rifle.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Update
router.put('/api/rifle/:id', async (req, res) =>{
    await RifleSchema.updateOne({_id: req.params.id}, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/rifle/:id', async (req, res) =>{
    await RifleSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;