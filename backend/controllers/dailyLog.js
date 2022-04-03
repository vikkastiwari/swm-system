const { format } = require('date-fns');
const mongoose = require('mongoose');
const DailyLog = require('../models/dailyLog');
const User = require('../models/user');

const getDailyLog = async (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  const today = format(new Date(), 'dd/MM/yyyy');

  let dailyLog = await DailyLog.findOne({ userId: id, date: today });
  //   console.log(dailyLog, today);

  if (dailyLog) {
    return res.json({
      success: true,
      payload: dailyLog,
      alerts: [],
    });
  } else {
    const user = await User.findById(id)
      .populate('vehicleId')
      .populate('binIds');
    // console.log(user);

    const binIds = user.binIds.map((bin) => {
      return {
        _id: bin._id,
        title: bin.bin,
      };
    });

    dailyLog = new DailyLog({
      userId: user._id,
      date: today,
      vehicleId: user.vehicleId,
      binIds: binIds,
    });

    await dailyLog.save();

    return res.json({
      success: true,
      payload: dailyLog,
      alerts: [],
    });
  }
};

const updateDailyLog = async (req, res) => {
  const { id } = req.params;
  const { binIds } = req.body;
  const today = format(new Date(), 'dd/MM/yyyy');

  const dailyLog = await DailyLog.findOneAndUpdate(
    { userId: id, date: today },
    {
      binIds: binIds,
    },
    { new: true }
  );

  return res.json({
    success: true,
    payload: dailyLog,
    alerts: [],
  });
};

module.exports = { getDailyLog, updateDailyLog };
