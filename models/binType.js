const mongoose = require("mongoose");

const binTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BinType", binTypeSchema);
