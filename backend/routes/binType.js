const router = require('express').Router();

const binTypeController = require('../controllers/binType');
const auth = require('../utils/auth');
const handler = require('../utils/error/asyncHandler');

router.get('/', auth('admin', 'driver'), handler(binTypeController.getBinType));

router.post('/', auth('admin', 'driver'), handler(binTypeController.createBinType));

router.get('/:id', auth('admin', 'driver'), handler(binTypeController.getSingleBinType));

router.put('/:id', auth('admin', 'driver'), handler(binTypeController.updateBinType));

router.delete('/:id', auth('admin', 'driver'), handler(binTypeController.deleteBinType));

module.exports = router;
