const express= require("express")
const app= express()
const mongoose= require("mongoose")
const Routers= require("./routes/router")

const dbUrl= "mongodb://127.0.0.1:27017/React_auth"
mongoose.connect(dbUrl)
try {
    app.listen(3500,()=>console.log("The server is running on port 3500..."))
} catch (error) {
    
}

app.use(Routers)