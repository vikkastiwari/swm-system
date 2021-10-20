const jwt = require("jsonwebtoken");
const config = require("config");
function auth(req, res, next){
  const token = req.header("x-auth-validation");
  console.log(token)
  if (!token)
    return res.status(401).send("user is not authority to access this n point");
  try {
    const decoder = jwt.verify(token, config.get("jwtPrivateKey"));
    //json web token only contain the id because we save only in it
    // for refrence-- const token=jwt.sign({_id:user._id},config.get('jwtPrivateKey'));//here you see that token genrated for id only
    console.log(decoder);
    req.user=decoder;
    //because it return json value and that set the user value to the hide in json web token
    //basically paylosd value
    next();
  } catch (ex) {
    return res.status(400).send("Invalid token");
  }
}

module.exports = auth;
