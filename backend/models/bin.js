const mongoose = require("mongoose");

const binSchema = new mongoose.Schema({
  bin: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  threshold: {
    type: Number,
    required: true,
  },
  binType: { type: mongoose.Types.ObjectId, ref: "BinType", required: true },
  active: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Bin", binSchema);
