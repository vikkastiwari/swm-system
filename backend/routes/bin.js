const router = require('express').Router();

const binController = require('../controllers/bin');
const auth = require('../utils/auth');
const handler = require('../utils/error/asyncHandler');

router.get('/', auth('admin', 'driver'), handler(binController.getBin));

router.post('/', auth('admin', 'driver'), handler(binController.createBin));

router.get(
  '/:id',
  auth('admin', 'driver'),
  handler(binController.getSingleBin)
);

router.put('/:id', auth('admin', 'driver'), handler(binController.updateBin));

router.delete(
  '/:id',
  auth('admin', 'driver'),
  handler(binController.deleteBin)
);

module.exports = router;
