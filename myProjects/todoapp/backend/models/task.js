const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name :{
        type: String,
        require: true
    },
    description:{
        type: String,
    },
    notes : {
        type: String,
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

module.exports = mongoose.model('task', taskSchema)