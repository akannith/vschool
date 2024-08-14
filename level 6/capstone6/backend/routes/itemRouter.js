const express = require('express')
const Item = require("../models/item")
const itemRouter = express.Router()

//get

itemRouter.get('/', async (req, res, next) => {
    try {
        const foundItems = await Item.find()
        return res.status(200).send(foundItems)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

itemRouter.get('/user', async (req, res, next) => {
    try {
        const items= await Item.find({userId:req.auth._id}) 
        return res.status(200).send(items)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

itemRouter.get('/:itemId', async (req, res, next) => {
    try {
        const foundItems = await Item.findById(req.params.itemId)
        return res.status(200).send(foundItems)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})




//post

itemRouter.post('/', async (req, res, next) =>{
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id
        const newItem = new Item(req.body)
        const savedItem = await newItem.save()
        return res.status(201).send(savedItem)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//put
itemRouter.put('/:userId', async (req, res, next) => {
    try {
        const userId= req.params.userId
        const updatedItem = await Item.findByIdAndUpdate(
            userId,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedItem)
    } catch (error) {
        res.status(500)
       return next(error)
    }
})

//delete
itemRouter.delete('/:userId', async (req, res, next) => {
    try {
        const userId= req.params.userId
        const deletedItem = await Item.findOneAndDelete({_id: userId})
        return res.status(200).send(`Successfully deleted ${deletedItem.name}`)
    } catch (error) {
        res.status(500)
       return next(error)
    }
})

module.exports = itemRouter

