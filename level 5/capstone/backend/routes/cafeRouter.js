const express= require("express")
const cafeRouter = express.Router()
const cafe = require('../models/cafe.js')


cafeRouter.route('/')

.get(async(req, res, next) => {
    try {
        const foundEntrees = await cafe.find()
        return res.status(200).send(foundEntrees)
    } catch (error) {
        res.status(500)
     return next(error)
    }
})

.post(async(req, res, next) => {
    try {
        const newEntree = new cafe (req.body)
        const savedEntree = await newEntree.save()
        return res.status(201).send(savedEntree)
    } catch (error) {
        res.status(500)
     return next(error)
    }
})

cafeRouter.route('/:entreeId')

.get(async(req, res, next) => {
    try {
        const entreeId= req.params.entreeId
        const foundEntree = await cafe.findById({_id: entreeId})
        return res.status(200).send(foundEntree)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

.put(async(req, res, next) => {
    try {
        const entreeId= req.params.entreeId
        const updatedEntree = await cafe.findByIdAndUpdate(
        entreeId,
        req.body,
        {new: true}
    )
      return res.status(201).send (updatedEntree)
    } catch (error) {
        res.status(500)
     return next(error)
    }
})

.delete(async(req, res, next) => {
    try {
        const entreeId= req.params.entreeId
        const deletedEntree= await cafe.findOneAndDelete({_id: entreeId})
        return res.status(200).send (`Successfully deleted ${deletedEntree.Name}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})



module.exports = cafeRouter
