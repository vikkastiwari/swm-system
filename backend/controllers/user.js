const User = require("../models/user");

const getUser = async (req, res) => {
  return res.send(await User.find());
};

const getUserByType = async (req, res) => {
  const userType = req.params.type;
  const users = await User.find({ userType: userType });
  // .populate({ path: "vehicleId" })
  // .populate({ path: "binIds" });
  console.log(users);
  return res.send(users);
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  return res.send(
    await User.findById(id).populate("vehicleId").populate("binIds")
  );
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

  return res.send("User created successfully!");
};

const updateUser = async (req, res) => {
  const { name, userType, mobileNo, email, active } = req.body;
  const { id } = req.params;
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
  return res.send("User  updated successfully!");
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const myUser = await User.findByIdAndDelete(id);
  return res.send("User deleted successfully!");
};

const assignBins = async (req, res) => {
  const { userId, vehicleId, binIds } = req.body;
  const user = await User.findByIdAndUpdate(
    userId,
    { vehicleId, binIds },
    { new: true }
  );
  return res.send("Bins assigned successfully!");
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
