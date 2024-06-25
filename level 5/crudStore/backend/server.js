const express= require("express")
const app=express()
require("dotenv").config()
const morgan= require("morgan")
const mongoose= require("mongoose")


app.use(express.json())
app.use(morgan("dev"))


mongoose.connect(process.env.URI)
.then(() => {console.log("connected to the DB")})

app.listen(9000, () =>{
    console.log("server is ruuning on port 9000")
})

