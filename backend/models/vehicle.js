const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  lat: {
    type: String,
    required: false,
  },
  lng: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
