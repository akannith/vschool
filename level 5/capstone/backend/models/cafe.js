const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cafeSchema =new Schema({
    Name: {
        type:String,
        require:true,
    },
    Price:Number,
    ComesWith:{
        type:String,
    }
})

module.exports = mongoose.model("Cafe", cafeSchema)