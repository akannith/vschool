const express = require('express')
const Review = require('../models/review')
const reviewRouter = express.Router()

//create
reviewRouter.post('/:itemId', async(req, res, next) => {
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id
        req.body.itemId = req.params.itemId
        const newReview = new Review(req.body)
        const savedReview = await newReview.save()
        return res.status(201).send(savedReview)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// read

reviewRouter.get('/', async(req, res, next) => {
    try {
        const foundReviews = await Review.find()
        return res.status(200).send(foundReviews)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//update

reviewRouter.put('/:reviewId', async(req, res, next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            {_id:req.params.reviewId},
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedReview)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//delete

reviewRouter.delete('/:reviewId', async(req, res, next) => {
    try {
        const reviewId= req.params.reviewId
        const deletedReview = await Review.findOneAndDelete({_id:reviewId})
        return res.status(201).send(`Successfully deleted review ${deletedReview}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = reviewRouter
