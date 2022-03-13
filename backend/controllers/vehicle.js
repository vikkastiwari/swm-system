const mongoose = require('mongoose');

const Vehicle = require('../models/vehicle');

const getVehicle = async (req, res) => {
  const vehicles = await Vehicle.find();

  return res.status(200).send({
    success: true,
    payload: vehicles,
    alerts: [{ type: 'success', message: 'Vehicles fetched successfully.' }],
  });
};

const getSingleVehicle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid vehicleId provided.' }],
    });
  }

  const vehicle = await Vehicle.findById(id);

  if (!vehicle) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Vehicle not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: vehicle,
    alerts: [
      { type: 'success', message: 'Vehicle details fetch successfully.' },
    ],
  });
};

const createVehicle = async (req, res) => {
  const { name, model, vehicleNo, capacity, active } = req.body;

  const vehicle = new Vehicle({ name, model, vehicleNo, capacity, active });
  await vehicle.save();

  return res.status(201).send({
    success: true,
    payload: vehicle,
    alerts: [{ type: 'success', message: 'Vehicle created successfully!' }],
  });
};

const updateVehicle = async (req, res) => {
  const { id } = req.params;
  const { name, model, vehicleNo, capacity, active } = req.body;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid vehicleId provided.' }],
    });
  }

  const vehicle = await Vehicle.findByIdAndUpdate(
    id,
    { name, model, vehicleNo, capacity, active },
    { new: true }
  );

  if (!vehicle) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Vehicle not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    payload: vehicle,
    alerts: [{ type: 'success', message: 'Vehicle updated successfully.' }],
  });
};

const deleteVehicle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send({
      success: false,
      alerts: [{ type: 'error', message: 'Invalid vehicleId provided.' }],
    });
  }

  const vehicle = await Vehicle.findByIdAndDelete(id);

  if (!vehicle) {
    return res.status(404).send({
      success: false,
      alerts: [{ type: 'error', message: 'Vehicle not found.' }],
    });
  }

  return res.status(200).send({
    success: true,
    alerts: [{ type: 'success', message: 'Vehicle deleted successfully.' }],
  });
  
};

module.exports = {
  getVehicle,
  getSingleVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
