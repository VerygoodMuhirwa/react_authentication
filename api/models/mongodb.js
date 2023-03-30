const express= require("express")
const app= express()
const mongoose= require("mongoose")
const Routers= require("../routes/router")
app.use(express.json())
const dbUrl= "mongodb://127.0.0.1:27017/React_auth"
app.use(Routers)
mongoose.connect(dbUrl)
try {
app.listen(3400,()=>console.log("The server running on port 3400"))
} catch (error) {
    
}
