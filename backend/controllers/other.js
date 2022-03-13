const bcrypt = require('bcryptjs');

const User = require('../models/user');
const Bin = require('../models/bin');
const Vehicle = require('../models/vehicle');

const overview = async (req, res) => {
  const bin = await Bin.find().countDocuments();
  const vehicle = await Vehicle.find().countDocuments();
  const admin = await User.find({ userType: 'admin' }).countDocuments();
  const driver = await User.find({ userType: 'driver' }).countDocuments();

  return res.status(200).send({
    success: true,
    payload: { bin, vehicle, user: { admin, driver } },
    // alerts: [{ type: 'success', message: 'You have logged in successfully.' }],
  });
};

module.exports = { overview };
