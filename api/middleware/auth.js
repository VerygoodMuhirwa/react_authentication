const jwt= require("jsonwebtoken")
const config= require("config")

async function auth(req,res, next){
const Token =     req.header("Authorisation")
if(!Token){
    res.send({Error:"Token Missing"})
}
try{
const decoded= await jwt.verify(Token.split('Token')[1],config.get("jwtPrivateKey"))
req.user= decoded
next()
}
catch(error){
    return res.send("invalid token ").status(400)

}
}

module.exports= auth