const express=require("express")
const inventoryRouter= express.Router()
const inventory = require('../models/inventoryModel')

// const inventory =[
//     {
//         itemName: "Thing1",
//         itemNumber: "01"
    
//     }
// ]

inventoryRouter.get('/:itemId', async(req, res, next) => {
    try {
        const itemId= req.params.itemId
        const foundItem = await inventory.findById({_id: itemId})
        return res.status(200).send(foundItem)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


inventoryRouter.route('/')

.get(async(req, res, next) => {
    try {
        const foundItems = await inventory.find()   
        return res.status(200).send(foundItems)
    } catch (error) {
        res.status(500)
     return next(error)
    }

})

.post(async(req, res, next) => {
    try {
        const newItem = new inventory (req.body)
        const savedItem = await newItem.save()
        return res.status(201).send(savedItem)
    } catch (error) {
        res.status(500)
     return next(error)
    }
})

inventoryRouter.put('/:itemId', async(req, res, next) => {
    try {
        const itemId= req.params.itemId
        const updatedItem = await inventory.findByIdAndUpdate(
        itemId,
        req.body,
        {new: true}
    )
      return res.status(201).send ("Successfully updated Item")
    } catch (error) {
        res.status(500)
     return next(error)
    }
    
     
})

inventoryRouter.delete('/:itemId', async(req, res, next) => {
    try {
        const itemId= req.params.itemId
        const deletedItem= await inventory.findOneAndDelete({_id: itemId})
        return res.status(200).send (`Successfully deleted ${deletedItem.name}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = inventoryRouter