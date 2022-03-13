const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["driver", "admin"],
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  vehicleId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" }],
  binIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bin" }],
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id, userType: this.userType, email: this.email }, config.get('jwtPrivateKey'));
}

module.exports = mongoose.model("User", userSchema);
