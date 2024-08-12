const express = require('express')
const Comment = require('../models/comment')
const commentRouter = express.Router()


//create
commentRouter.post('/:issueId', async(req, res, next) => {
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id
        req.body.issueId = req.params.issueId
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        return res.status(201).send(savedComment)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// read

commentRouter.get('/', async(req, res, next) => {
    try {
        const foundComments = await Comment.find()
        return res.status(200).send(foundComments)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


//update

commentRouter.put('/:commentId', async(req, res, next) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            {_id:req.params.commentId},
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedComment)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


//delete

commentRouter.delete('/:commentId', async(req, res, next) => {
    try {
        const commentId= req.params.commentId
        const deletedComment = await Comment.findOneAndDelete({_id:commentId})
        return res.status(201).send(`Successfully deleted comment ${deletedComment}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = commentRouter