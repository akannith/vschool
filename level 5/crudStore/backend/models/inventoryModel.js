const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    itemName:{
        type: String,
        required: true
    },
    itemNumber: Number,
    itemImage: {
        type: String
    }

})

module.exports = mongoose.model("Inventory", inventorySchema)