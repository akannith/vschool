const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    price: Number,

    imgUrl:{
        type: String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Item", itemSchema)