const express= require("express")
const app= express()
const morgan= require("morgan")
const mongoose=require('mongoose')
require ("dotenv").config()
 
// mongoose.connect(process.env.URI)
// .then(() => {console.log("connected to the DB")})

app.use(express.json())
app.use(morgan('dev'))
//middleware

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
app.use("/bounties", require("./routes/bountyRouter.js"))

// error hander
app.use((err, req, res, next) => {
    console.log(err)
    return res.send ({errMgs: err.message})
})
app.listen(9000, () =>{
    console.log("server is ruuning on port 9000")
})
