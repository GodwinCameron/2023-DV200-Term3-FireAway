const express = require('express')

const ShotgunSchema = require('../models/shotguns');

const router = express();

//Read all
router.get('/api/shotguns', async(req, res) =>{
    const findShotgun = await ShotgunSchema.find()
    res.json(findShotgun)
})

//Read one
router.get('/api/shotgun/:id', async (req, res) => {
    const findShotgun = await ShotgunSchema.findById(req.params.id)
    res.json(findShotgun)
})

//Create
router.post('/api/shotgun', async (req,res) => {
    const shotgun = new ShotgunSchema({...req.body})
    await shotgun.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Update
router.put('/api/shotgun/:id', async (req, res) =>{
    await ShotgunSchema.updateOne({_id: req.params.id}, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/shotgun/:id', async (req, res) =>{
    await ShotgunSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;