const router = require("express").Router(),
  binController = require("../controllers/bin");

router.route("/").get(binController.getBin).post(binController.createBin);

router
  .route("/:id")
  .get(binController.getSingleBin)
  .put(binController.updateBin)
  .delete(binController.deleteBin);

module.exports = router;
