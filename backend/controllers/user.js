const mongoose = require('mongoose');

const User = require('../models/user');

const getUser = async (req, res) => {
  const users = await User.find();

  return res.status(200).send({
    success: true,
    payload: users,
    alerts: [{ type: 'success', message: 'Users fetched successfully.' }],
  });
};

const getUserByType = async (req, res) => {
  const userType = req.params.type;

  const users = await User.find({ userType: userType });

  return res.status(200).send({
    success: true,
    payload: users,
    alerts: [{ type: 'success', message: 'Users fetched successfully.' }],
  });
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid userId provided.' }],
    });
  }

  const user = await User.findById(id).populate('vehicleId').populate('binIds');

  if (!user) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'User not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: user,
    alerts: [{ type: 'success', message: 'User details fetch successfully.' }],
  });
};

const createUser = async (req, res) => {
  const { name, userType, mobileNo, email, password, active } = req.body;

  const newUser = new User({
    name,
    userType,
    mobileNo,
    email,
    password,
    active,
  });

  await newUser.save();

  return res.status(201).send({
    success: true,
    payload: newUser,
    alerts: [{ type: 'success', message: 'User created successfully!' }],
  });
};

const updateUser = async (req, res) => {
  const { name, userType, mobileNo, email, active } = req.body;
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid userId provided.' }],
    });
  }

  const myUser = await User.findByIdAndUpdate(
    id,
    {
      name,
      userType,
      mobileNo,
      email,
      active,
    },
    { new: true }
  );

  if (!myUser) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'User not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: myUser,
    alerts: [{ type: 'success', message: 'User  updated successfully!' }],
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid userId provided.' }],
    });
  }

  const myUser = await User.findByIdAndDelete(id);

  if (!myUser) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'User not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    alerts: [{ type: 'success', message: 'User deleted successfully!' }],
  });
};

const assignBins = async (req, res) => {
  const { userId, vehicleId, binIds } = req.body;

  if (!mongoose.isValidObjectId(userId)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid userId provided.' }],
    });
  }

  const user = await User.findByIdAndUpdate(
    userId,
    { vehicleId, binIds },
    { new: true }
  );

  if (!user) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'User not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: user,
    alerts: [{ type: 'success', message: 'Bins assigned successfully!' }],
  });
};

module.exports = {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  getUserByType,
  assignBins,
};
