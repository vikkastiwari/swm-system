const mongoose = require('mongoose');

const Bin = require('../models/bin');

const getBin = async (req, res) => {
  const bins = await Bin.find().populate('binType');
  
  return res.status(200).send({
    success: true,
    payload: bins,
    alerts: [{ type: 'success', message: 'Bins fetched successfully.' }],
  });
};

const getSingleBin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid binId provided.' }],
    });
  }

  const bin = await Bin.findById(id).populate('binType');

  if (!bin) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Bin not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: bin,
    alerts: [{ type: 'success', message: 'Bin details fetch successfully.' }],
  });
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

  return res.status(201).send({
    success: true,
    payload: newBin,
    alerts: [{ type: 'success', message: 'Bin created successfully!' }],
  });
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

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid binId provided.' }],
    });
  }

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

  if (!myBin) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Bin not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: myBin,
    alerts: [{ type: 'success', message: 'Bin  updated successfully!' }],
  });
};

const deleteBin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid binId provided.' }],
    });
  }

  const myBin = await Bin.findByIdAndDelete(id);

  if (!myBin) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Bin not found.' }],
    });
  }

  return res.status(201).send({
    success: true,
    alerts: [{ type: 'success', message: 'Bin deleted successfully!' }],
  });
};

module.exports = {
  getBin,
  getSingleBin,
  createBin,
  updateBin,
  deleteBin,
};
