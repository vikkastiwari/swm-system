const Bin = require("../models/bin");

const getBin = async (req, res) => {
  return res.send(await Bin.find().populate("binType"));
};

const getSingleBin = async (req, res) => {
  const { id } = req.params;
  const bin = await Bin.findById(id).populate("binType");
  console.log(id);
  console.log(bin);
  return res.send(bin);
};

const createBin = async (req, res) => {
  const {
    bin,
    latitude,
    longitude,
    capacity,
    location,
    threshold,
    binType,
    active,
  } = req.body;
  const newBin = new Bin({
    bin,
    latitude,
    longitude,
    capacity,
    location,
    threshold,
    binType,
    active,
  });

  await newBin.save();
  return res.send("Bin created successfully!");
};

const updateBin = async (req, res) => {
  const {
    bin,
    latitude,
    longitude,
    capacity,
    location,
    threshold,
    binType,
    active,
  } = req.body;
  const { id } = req.params;
  const myBin = await Bin.findByIdAndUpdate(
    id,
    {
      bin,
      latitude,
      longitude,
      capacity,
      location,
      threshold,
      binType,
      active,
    },
    { new: true }
  );
  return res.send("Bin  updated successfully!");
};

const deleteBin = async (req, res) => {
  const { id } = req.params;
  const myBin = await Bin.findByIdAndDelete(id);
  return res.send("Bin deleted successfully!");
};

module.exports = {
  getBin,
  getSingleBin,
  createBin,
  updateBin,
  deleteBin,
};
