const mongoose = require('mongoose');

const dailyLogSchema = new mongoose.Schema({
  vehicleId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
  binIds: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bin',
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      collected: {
        type: Boolean,
        default: false,
      },
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DailyLog', dailyLogSchema);
