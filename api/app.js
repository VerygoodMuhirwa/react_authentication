require("./models/mongodb")
const config= require("config")
const express= require("express")
const Routers= require("./routes/router")
const AuthMiddleware= require("./middleware/auth")
const Admin= require("./middleware/admin")
const app= express()
if(!config.get("jwtPrivateKey")){
    console.log("JWT PRIVATE KEY NOT DEFINED")
    process.exit(1)
}

app.use(Routers, [AuthMiddleware, Admin])