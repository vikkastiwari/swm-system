const router = require('express').Router();

const userController = require('../controllers/user');
const auth = require('../utils/auth');
const handler = require('../utils/error/asyncHandler');

router.get('/', auth('admin', 'driver'), handler(userController.getUser));

router.post('/', auth('admin', 'driver'), handler(userController.createUser));

router.get(
  '/userType/:type',
  auth('admin', 'driver'),
  handler(userController.getUserByType
));

router.post('/assignBin', auth('admin', 'driver'), handler(userController.assignBins));

router.get('/:id', auth('admin', 'driver'), handler(userController.getSingleUser));

router.put('/:id', auth('admin', 'driver'), handler(userController.updateUser));

router.delete('/:id', auth('admin', 'driver'), handler(userController.deleteUser));

module.exports = router;
