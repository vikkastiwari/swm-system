const Vehicle = require("../models/vehicle");

const getVehicle = async (req, res) => {
  return res.send(await Vehicle.find());
};

const getSingleVehicle = async (req, res) => {
  const { id } = req.params;
  return res.send(await Vehicle.findById(id));
};

const createVehicle = async (req, res) => {
  const { name, model, vehicleNo, capacity, active } = req.body;
  const vehicle = new Vehicle({ name, model, vehicleNo, capacity, active });
  await vehicle.save();
  return res.send("Vehicle created successfully!");
};

const updateVehicle = async (req, res) => {
  const { id } = req.params;
  const { name, model, vehicleNo, capacity, active } = req.body;
  const vehicle = await Vehicle.findByIdAndUpdate(
    id,
    { name, model, vehicleNo, capacity, active },
    { new: true }
  );
  return res.send("Vehicle updated successfully.");
};

const deleteVehicle = async (req, res) => {
  const { id } = req.params;
  const vehicle = await Vehicle.findByIdAndDelete(id);
  return res.send("Vehicle deleted successfully.");
};

module.exports = {
  getVehicle,
  getSingleVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
