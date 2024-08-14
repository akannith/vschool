const express= require("express")
const app= express()
const morgan= require("morgan")
const mongoose=require('mongoose')
require ("dotenv").config()
const {expressjwt} = require('express-jwt')
 
//middleware
app.use(express.json())
app.use(morgan('dev'))


//connecting to DB
async function connectToDB() {
    try{
          await mongoose.connect(process.env.URI)
          console.log("Connected to DB")
    } catch(err){
        console.log(err)
    }
}
connectToDB()

//Routes
app.use('/api/auth', require('./routes/cafeAuthRouter'))
app.use('/api/main', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use("/cafes", require ("./routes/cafeRouter.js"))

// error hander
app.use((err, req, res, next) => {
    console.log(err)
    return res.send ({errMgs: err.message})
})
app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
})