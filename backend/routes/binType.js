const router = require("express").Router(),
  binTypeController = require("../controllers/binType");

router
  .route("/")
  .get(binTypeController.getBinType)
  .post(binTypeController.createBinType);

router
  .route("/:id")
  .get(binTypeController.getSingleBinType)
  .put(binTypeController.updateBinType)
  .delete(binTypeController.deleteBinType);

module.exports = router;
