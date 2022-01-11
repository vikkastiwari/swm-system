const router = require("express").Router(),
  vehicleController = require("../controllers/vehicle");

router
  .route("/")
  .get(vehicleController.getVehicle)
  .post(vehicleController.createVehicle);

router
  .route("/:id")
  .get(vehicleController.getSingleVehicle)
  .put(vehicleController.updateVehicle)
  .delete(vehicleController.deleteVehicle);

module.exports = router;
