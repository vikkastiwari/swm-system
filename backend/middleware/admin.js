const config = require("config");
module.exports=function(req,res,next){
    //403-->forbidden
    //401-->unAuthorize aceess
    if(!req.user.isAdmin && req.user.AdminPaaword===config.get("adminPassword")) return res.status(403).send(`Sorry You can not login as Admin result Forbidden
    because you try to access for this emailID:---------${req.user.email}--------who is not an admin.....
    `);
    // console.log('i am here as well');
    next();
}