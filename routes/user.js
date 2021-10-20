const router = require("express").Router(),
  userController = require("../controllers/user");

router.route("/").get(userController.getUser).post(userController.createUser);

router.get("/userType/:type", userController.getUserByType);
router.post("/assignBin", userController.assignBins);

router
  .route("/:id")
  .get(userController.getSingleUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
