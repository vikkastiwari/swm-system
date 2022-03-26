const mongoose = require("mongoose");

const pathSchema = new mongoose.Schema({
  _id: Schema.ObjectId,
  requirePath: {
    type: Array,
    default: [],
    required: true,
  },
  demandPath: {
    type: Array,
    default: [],
    required: true,
  },
});

module.exports = mongoose.model("pathRoute", pathSchema);
