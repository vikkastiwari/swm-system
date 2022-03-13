const router = require('express').Router();

const otherController = require('../controllers/other');
const auth = require('../utils/auth');
const handler = require('../utils/error/asyncHandler');

router.get('/overview', auth('admin', 'driver'), handler(otherController.overview));

module.exports = router;
