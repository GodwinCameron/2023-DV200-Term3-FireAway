const express = require('express')

const OrderSchema = require('../models/orders');

const router = express();

//Read all
router.get('/api/orders', async(req, res) =>{
    const findOrder = await OrderSchema.find()
    res.json(findOrder)
})

//Read one
router.get('/api/order/:id', async (req, res) => {
    const findOrder = await OrderSchema.findById(req.params.id)
    res.json(findOrder)
})

//Create
router.post('/api/order', async (req,res) => {
    const Order = new OrderSchema({...req.body})
    await Order.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Update
router.put('/api/order/:id', async (req, res) =>{
    const {id} = req.params.id;
    await OrderSchema.updateOne({_id: req.params.id}, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/order/:id', async (req, res) =>{
    await OrderSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router;