const router = require('express').Router();

const vehicleController = require('../controllers/vehicle');
const auth = require('../utils/auth');
const handler = require('../utils/error/asyncHandler');

router.get('/', auth('admin', 'driver'), handler(vehicleController.getVehicle));

router.post('/', auth('admin', 'driver'), handler(vehicleController.createVehicle));

router.get('/:id', auth('admin', 'driver'), handler(vehicleController.getSingleVehicle));

router.put('/:id', auth('admin', 'driver'), handler(vehicleController.updateVehicle));

router.delete('/:id', auth('admin', 'driver'), handler(vehicleController.deleteVehicle));

module.exports = router;
