const express = require('express')
const cafeAuthRouter = express.Router()
const CafeUser = require('../models/cafeUser')
const jwt = require('jsonwebtoken')

cafeAuthRouter.post('/signup', async(req, res, next) => {
    try {
       const cafeUser = await CafeUser.findOne({username: req.body.username})
       if(cafeUser){ res.status(403)
       return next (new Error ('Username is already taken'))
       } 
       const newCafeUser = new CafeUser(req.body)
       const savedCafeUser = await newCafeUser.save()
       const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
       return res.status(201).send({user: savedCafeUser.withoutPassword(), token})
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

cafeAuthRouter.post('/login', async(req, res, next) => {
    try {
       const cafeUser = await CafeUser.findOne({username: req.body.username})
       if(!cafeUser){res.status(403)
       return next (new Error ("Incorrect Username or Password"))
       } 
       const passwordCheck = await cafeUser.checkPassword(req.body.password)
       if(!passwordCheck){ 
        res.status(403)
        return next (new Error ("Incorrect Username or Password"))
        } 
       const token = jwt.sign(cafeUser.withoutPassword(), process.env.SECRET)
       return res.status(201).send({cafeUser: cafeUser.withoutPassword(), token})
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = cafeAuthRouter