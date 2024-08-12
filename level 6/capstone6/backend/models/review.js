const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    itemId: {
        type: Schema.Types.ObjectId,
        ref: "Item" 
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Review', reviewSchema)