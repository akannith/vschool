const express = require('express')
const Issue = require("../models/issue")
const issueRouter = express.Router()


//get

issueRouter.get('/', async (req, res, next) => {
    try {
        const foundIssues = await Issue.find()
        return res.status(200).send(foundIssues)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

issueRouter.get('/user', async (req, res, next) =>{
    try {
        const foundIssues = await Issue.find({userId: req.auth._id})
        return res.status(200).send(foundIssues)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})



//post

issueRouter.post('/', async (req, res, next) =>{
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id
        const newIssue = new Issue(req.body)
        const savedIssue = await newIssue.save()
        return res.status(201).send(savedIssue)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})


//put
issueRouter.put('/:userId', async (req, res, next) => {
    try {
        const userId= req.params.userId
        const updatedIssue = await Issue.findByIdAndUpdate(
            userId,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedIssue)
    } catch (error) {
        res.status(500)
       return next(error)
    }
})

issueRouter.put("/upvotes/:issueId", async(req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: {upvote: req.auth._id},
                $pull: {downvote: req.auth._id}
            },
            {new:true}
        )
        return res.status(201).send (updatedIssue)
    } catch (error) {
        res.status(500)
       return next(error)
    }
})

issueRouter.put("/downvotes/:issueId", async(req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: {downvote: req.auth._id},
                $pull: {upvote: req.auth._id}
            },
            {new:true}
        )
        return res.status(201).send (updatedIssue)
    } catch (error) {
        res.status(500)
       return next(error)
    }
})

//delete
issueRouter.delete('/:userId', async (req, res, next) => {
    try {
        const userId= req.params.userId
        const deletedIssue = await Issue.findOneAndDelete({_id: userId})
        return res.status(200).send(`Successfully deleted ${deletedIssue.title}`)
    } catch (error) {
        res.status(500)
       return next(error)
    }
})





module.exports = issueRouter

