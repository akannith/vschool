const mongoose = require('mongoose')
const Schema = mongoose.Schema



//Bounty Blueprint

const bountySchema =new Schema({
    firstName:{
         type: String,
         required:true, 
    },
    lastName: {
        type: String,
         required:true, 
    },
    living: {
        type: Boolean,
         required:true, 
    },
    amount: Number,
    Type: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Bounty", bountySchema)