const express= require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid');
const Bounty = require('../models/bounty')


const bounties = [
    {
      firstName: "Marneg",
      lastName: "Folstock",
      living: true,
      amount: 100,
      type: "Jedi",
      _id: uuidv4(),
    },
    {
      firstName: "Tarenth",
      lastName: "Vortex",
      living: false,
      amount: 200,
      type: "Sith",
      _id: uuidv4(),
    },
    {
      firstName: "Zethara",
      lastName: "Arvax",
      living: true,
      amount: 300,
      type: "Sith",
      _id: uuidv4(),
    },
  ];


bountyRouter.route("/")
.get(async(req, res) => {
    res.send(bounties);
})


.get(async(req, res, next) => {
  try {
    const foundBounties = await Bounty.find()
    return res.status(200).send(foundBounties)
  } catch (error) {
     res.status(500)
     return next(error)
  }
  // const bountyId= req.params.bountyId
  // const foundBounty = bounties.findIndex(bounty => bounty._id === bountyId)
  // if(!foundBounty){
  //  const error = new Error("The item was not found")
  //  return next(error)
  // }
  // res.send(foundBounty)
})

.post(async(req, res, next) => {
  try {
    const newBounty= new Bounty(req.body)
    const savedBounty = await newBounty.save()
    return res.status(201). send(savedBounty)
  } catch (error) {
     res.status(500)
     return next(error)
  }
  // const newBounty = req.body
  // newBounty._id= uuidv4()
  //   bounties.push(newBounty)
  //   res.send(newBounty);
})

bountyRouter.route('/:bountyId')

.put(async(req, res, next) => {
  try {
    const bountyId= req.params.bountyId
    const updatedBounty = await Bounty.findByIdAndUpdate(
      bountyId,
      req.body,
      {new: true}
    )
      return res.status(201).send ("Successfully updated bounty")
    
  } catch (error) {
    res.status(500)
     return next(error)
  }

  // const bountyId= req.params.bountyId
  //   const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  //   const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
  //   res.send(updatedBounty)
})

.delete(async(req, res, next) => {
  try {
    const bountyId= req.params.bountyId
    const deletedBounty = await Bounty.findOneAndDelete({_id: bountyId})
    return res.status(200).send (`Successfully deleted ${deletedBounty.bountyId}`)
    
  } catch (error) {
    res.status(500)
    return next(error)
  }
    // const bountyId= req.params.bountyId
    // const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    // bounties.splice(bountyIndex, 1)
    // res.send("Successfully deleted bounty")
})


bountyRouter.get('/type', async (req, res, next) => {
  try {
    const foundBounties = await Bounty.find({type: req.query.type })
    return res.status(200).send(foundBounties)
  } catch (error) {
    res.status(500)
    return next(error)
  }
})

module.exports= bountyRouter