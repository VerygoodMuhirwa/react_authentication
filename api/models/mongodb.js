const express= require("express")
const app= express()
const mongoose= require("mongoose")

const Routers= require("../routes/router")
const cors=require("cors")
const dbUrl= "mongodb://127.0.0.1:27017/React_auth"
mongoose.connect(dbUrl)
app.use(cors())
app.use(express.json())
try {
    app.listen(3500,()=>console.log("The server is running on port 3500..."))
} catch (error) {
    
}
