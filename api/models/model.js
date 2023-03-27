const mongoose= require("mongoose")

const dbSchema = new mongoose.Schema({
    username:{
        type:[String,"The username must be type of string"],
        minlength:[10,"The minimum username length must be at least 10 characters"],
        required:[true,"The password is required"]

    },
    email:{
        type:[String,"The email must be type of string"],
        minlength:[10,"The minimum email length must be at least 10 characters"],
        required:[true,"The password is required"]

},

    password:{
        type:[String,"The username must be type of string"],
        minlength:[10,"The minimum username must be at least 10 characters"],
   required:[true,"The password is required"]
    },

},{timestamps:true})



const dbUsers= mongoose.model("Users",dbSchema);

module.exports= dbUsers;