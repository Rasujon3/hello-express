const router = require("express").Router();

const {
  aboutController,
  helpController,
  homeController,
} = require("./controller");

router.get("/", homeController);

router.get("/about", aboutController);

router.get("/help", helpController);

module.exports = router;
