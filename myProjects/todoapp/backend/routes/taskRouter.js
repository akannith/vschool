const express = require('express')
const Task = require("../models/task")
const taskRouter = express.Router()

// get
taskRouter.get('/', async (req, res, next) => {
    try {
        const foundTasks = await Task.find()
        return res.status(200).send(foundTasks)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

taskRouter.get('/user', async (req, res, next) => {
    try {
        const tasks = await Task.find({userId:req.auth._id})
        return res.status(200).send(tasks)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

taskRouter.get('/:taskId', async (req, res, next) => {
    try {
        const foundTasks = await Task.findById(req.params.taskId)
        return res.status(200).send(foundTasks)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//post

taskRouter.post('/', async (req, res, next) => {
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id
        const newTask = new Task(req.body)
        const savedTask = await newTask.save()
        return res.status(201).send(savedTask) 
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


//put

taskRouter.put('/:userId', async (req, res, next) => {
    try {
        const userId= req.params.userId
        const updatedTask = await Task.findByIdAndUpdate(
            userId,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedTask)
    } catch (error) {
        res.status(500)
       return next(error)
    }
})

//delete
taskRouter.delete('/:userId', async (req, res, next) => {
    try {
        const userId= req.params.userId
        const deletedTask = await Task.findOneAndDelete({_id: userId})
        return res.status(200).send(`Successfully deleted ${deletedTask.name}`)
    } catch (error) {
        res.status(500)
       return next(error)
    }
})

module.exports = taskRouter