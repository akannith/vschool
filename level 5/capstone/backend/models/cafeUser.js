const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require ("bcrypt")


const cafeUserSchema = new Schema({
        username: {
            type: String,
            unique: true,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        memberSince: {
            type:Date,
            default: Date.now
        }
})

Schema.pre('save', async function(next){
    const cafeUser = this
    if(cafeUser.isModified('password')){
        try {
            const hash = await bcrypt.hash(cafeUser.password, 10)
            cafeUser.password = hash
        } catch (error) {
            return next(error)
        }
    }
})
cafeUserSchema.methods.checkPassword = async function (passwordAttempt){
    try {
        return bcrypt.compare(passwordAttempt, this.password)
    } catch (error) {
        throw(error)
    }
}
cafeUserSchema.methods.withoutPassword = function(){
    const cafeUser = this.toObject()
    delete cafeUser.password
    return cafeUser
}
module.exports = mongoose.model("CafeUser", cafeUserSchema)