function admin(req,res,next){
    if(!req.user.isAdmin) return res.send("Access denied ").status(403)
    next()
}
module.exports = admin