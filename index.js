const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  config = require("config"),
  Port = process.env.PORT || 8080,
  bin = require("./routes/bin"),
  binType = require("./routes/binType"),
  userRegister = require("./routes/userRegister");
  Login=require('./routes/login');
(vehicle = require("./routes/vehicle")),
  (user = require("./routes/user")),
  (cors = require("cors"));

const mongoDBUri = config.get("DB_URI");
mongoose
  .connect(mongoDBUri, {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//      useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection established!");
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ exposedHeaders: ["x-auth-token"] }));

// app.use("/", (req, res) => {
//   return res.send(`All is well!`);
//  });
app.use("/signin",Login);
app.use("/register", userRegister);
app.use("/bin", bin);
app.use("/binType", binType);
app.use("/vehicle", vehicle);
app.use("/user", user);

app.get("/",(req,res)=>{
  res.status(200).send([
    "This API is using for our final year project using library like lodash,express,mogoDB,winston,config etc;",
    "Contributer->Durgesh Tiwari,Vikas Tiwari,Bimalesh Seth",
    "/signin->for sing in",
    "/register->for register",
    "/bin ->for requsting no of bins",
    "/binType -> This is give information about type of bins we are using are",
    "/Vehical ->Vechical type and and information",
    "/user ->This is given idea about user and super user in our application but information is limited to admin user only"
  ])
  
});

app.listen(Port, () =>
  console.log(`Server listening on http://localhost:${Port}`)
);
