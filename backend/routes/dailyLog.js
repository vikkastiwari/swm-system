const router = require('express').Router();

const dailyLogController = require('../controllers/dailyLog');
const auth = require('../utils/auth');
const handler = require('../utils/error/asyncHandler');

router.get('/:id', auth('admin', 'driver'), handler(dailyLogController.getDailyLog));

router.put('/:id', auth('admin', 'driver'), handler(dailyLogController.updateDailyLog));

module.exports = router;