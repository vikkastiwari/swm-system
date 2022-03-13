const router = require('express').Router();

const authController = require('../controllers/auth');
const auth = require('../utils/auth');
const handler = require('../utils/error/asyncHandler');

router.get('/me', auth('admin', 'driver'), handler(authController.me));

router.post('/login', handler(authController.login));


module.exports = router;