
const Users= require("../models/model")
const express= require("express")
const _ = require("lodash")
const bcrypt= require("bcrypt")
const router= express.Router()

const logginUser= async (req,res)=>{
    const {error} = validateUser(req.body)
    if(error){
       await res.send({error}).status(400)
    }
    //let me first check if the user exists in the database
const user= Users.findOne({email:req.body.email})
    //compare the password 
const comparing= await bcrypt.compare(user.password, req.body.password)
if(!comparing){
res.json({message:"Invalid email or password"}).status(404)
}
Users.generateAuthToken(_.pick(req.body,["username","email","email","_id"]))
res.json({message:"The user logged in successfully"}).status(202)
}

module.exports =logginUser