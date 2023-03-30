const express= require("express")
const Router= express.Router()
const authControllers= require("../controllers/auth")
const authenticationControllers= require("../controllers/authenticationControllers")

Router.post("/create",authenticationControllers);
Router.post("/login",authControllers)
module.exports = Router
