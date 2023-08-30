const express = require('express')

const PistolSchema = require('../models/pistols');

const router = express();

//Read all
router.get('/api/pistols', async(req, res) =>{
    const findPistol = await PistolSchema.find()
    res.json(findPistol)
})

//Read one
router.get('/api/pistol/:id', async (req, res) => {
    const findPistol = await PistolSchema.findById(req.params.id)
    res.json(findPistol)
})

//Create
router.post('/api/pistol', async (req,res) => {
    const pistol = new PistolSchema({...req.body})
    await pistol.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Update
router.put('/api/pistol/:id', async (req, res) =>{
    const {id} = req.params.id;
    await PistolSchema.updateOne({_id: req.params.id}, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/pistol/:id', async (req, res) =>{
    await PistolSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;