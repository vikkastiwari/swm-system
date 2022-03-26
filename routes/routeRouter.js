const router = require("express").Router(),
  routeController = require("../controllers/routecontroller");

router
  .route("/")
  .get(routeController.getRouteType)
  .post(routeController.creatNewRoute);

router
  .route("/:id")
  .get(routeController.getSingleRouteById)
  .delete(routeController.deleteRoute);

module.exports = router;
