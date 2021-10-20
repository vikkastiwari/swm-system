const mongoose = require("mongoose");
const Joi = require("joi");
const { boolean } = require("joi");
const UserSchema = mongoose.model(
  "UserSchema",
  new mongoose.Schema({
    name: {
      type: String,
      min: 3,
      max: 30,
      require: true,
    },
    email: {
      type: String,
      min: 0,
      max: 30,
    },
    password: {
      type: String,
      default: false,
    },
    AdminPassword: {
      type: String,
      default: false,
    },
    isAdmin: {
      type:Boolean,
      default: false,
    },
  })
);
function validateUser({ name, email, password }) {
  const schema = Joi.object({
    name: Joi.string().min(0).required(),
    email: Joi.string().min(0).required(),
    password: Joi.string().min(0).max(10).required(),
  });
  return schema.validate({ name, email, password }); //Joi.validate()
}

module.exports = { UserSchema, validateUser };
