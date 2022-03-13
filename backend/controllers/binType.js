const mongoose = require('mongoose');

const BinType = require('../models/binType');

const getBinType = async (req, res) => {
  const binTypes = await BinType.find();
  return res.status(200).send({
    success: true,
    payload: binTypes,
    alerts: [{ type: 'success', message: 'BinTypes fetched successfully.' }],
  });
};

const getSingleBinType = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid binTypeId provided.' }],
    });
  }

  const binType = await BinType.findById(id);

  if (!binType) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Bin type not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: binType,
    alerts: [
      { type: 'success', message: 'BinType details fetch successfully.' },
    ],
  });
};

const createBinType = async (req, res) => {
  const { name } = req.body;
  const binType = new BinType({ name: name });
  await binType.save();

  return res.status(201).send({
    success: true,
    payload: binType,
    alerts: [{ type: 'success', message: 'Bin type created successfully!' }],
  });
};

const updateBinType = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid binId provided.' }],
    });
  }

  const binType = await BinType.findByIdAndUpdate(
    id,
    { name: name },
    { new: true }
  );

  if (!binType) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Bin type not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: binType,
    alerts: [{ type: 'success', message: 'Bin Type updated successfully!' }],
  });
};

const deleteBinType = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid binId provided.' }],
    });
  }

  const binType = await BinType.findByIdAndDelete(id);

  if (!binType) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Bin type not found.' }],
    });
  }

  return res.status(201).send({
    success: true,
    alerts: [{ type: 'success', message: 'Bin Type deleted successfully!' }],
  });
};

module.exports = {
  getBinType,
  getSingleBinType,
  createBinType,
  updateBinType,
  deleteBinType,
};
