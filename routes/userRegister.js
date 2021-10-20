const express = require("express");
const { UserSchema, validateUser } = require("../models/userSchema");
const config = require("config");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const validate = require("../middleware/admin");
const Bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const { request } = require("http");
const router = express.Router();
router.get("/", async (req, res) => {
  const user = await UserSchema.find().sort("name");
  return res.send(user);
});
router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validateUser(req.body);
  console.log(error);
  if (error)
    return res
      .status(400)
      .send("you are not a valid user enter the valid input");
  let userInfo = await UserSchema.findOne({ email: req.body.email });
  if (userInfo)
    return res
      .status(400)
      .send("user is register with this email is alrady exist");
  const user = new UserSchema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    AdminPassword: req.body.AdminPaaword,
    isAdmin: req.body.isAdmin,
  });
  const token="will do";
//   const salt = await Bcryptjs.genSalt(10);
//   user.password = await Bcryptjs.hash(user.password, salt);
//   const token = jwt.sign(
//     {
//       _id: user._id,
//       email: user.email,
//       password: user.password,
//       AdminPassword: req.body.AdminPaaword,
//       isAdmin: user.isAdmin,
//     },
//     config.get("jwtPrivateKey")
//   );
  const result = await user.save();
  return res
    .header("x-auth-validation", token)
    .header("access-control-expose-headers", "x-auth-validation")
    .send({
      Information: _.pick(result, ["_id", "name", "email", "password"]),
    });
});
router.put("/:id", [auth, validate], async (req, res) => {
  const { error } = validateUser(req.body);
  if (error)
    return res.status(400).send("the customer with given id is not found");
  const user = await UserSchema.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    },
    { new: true }
  );
  if (!user)
    return res
      .status(404)
      .send("the customer ypu looking for this id is not exist");
  const result = await user.save();
  return res.send(result);
});
router.delete("/:id", [auth, validate], async (req, res) => {
  const user = await UserSchema.findByIdAndRemove(req.params.id);
  if (user) return res.status(404).send("The Customer with id is not exists");
  return res.send(user);
});
router.get("/:id", [auth, validate], async (req, res) => {
  const user = await UserSchema.findById(req.params.id);
  if (!user)
    return res.status(404).send("The Customer with this id is not exists ");
  return res.send(user);
});

module.exports = router;
