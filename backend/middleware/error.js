const winston=require('winston');
const { functions } = require("lodash");
module.exports=function(err,req,res,next){
    //the error 500 return for internal server feliar
    winston.error(err.message,err);
    //error 
    //warn 
    //info 
    //debug  
    //silly
    return res.status(500).send('something failed.....');
}