const mongoose= require("mongoose")
const config= require("config")
const Joi = require("joi")
const dbSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        minlength:10,
        required:true,

},

    password:{
        type:String,
        minlength:10,
   required:true,
    },

    isAdmin:{
type:Boolean,
        default:false,
        required:true,
    }

},{timestamps:true})

//validating the user using joi

function validateUser (item){
    const schema  = Joi.object(
        {
            username:Joi.string().min(3).max(255).required(),
            email: Joi.string().max(255).required().email({minDomainSegments:2}),
            password: Joi.string().max(255).min(3).required(),
    
        }
    ) 
return schema.validate(item)
}
//generating the token for the user 
dbSchema.methods.generateAuthToken= async function(){
    const token= {
        _id:this._id, email:this.email, isAdmin:this.isAdmin
    }
    config.get(('jwtPrivateKey'))
    return token
 
}

const dbUsers= mongoose.model("Users",dbSchema);



module.exports.Users= dbUsers;
module.exports.validateUser= validateUser