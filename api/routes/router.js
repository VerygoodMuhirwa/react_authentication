const express= require("express")
const Router= express.Router()

const authenticationControllers= require("../controllers/authenticationControllers")

Router.post("/create",authenticationControllers);
module.exports = Router