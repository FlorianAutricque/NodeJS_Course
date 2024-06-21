const express = require("express");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", viewsController.getOverview);

router.get("/tour/:slug", viewsController.getTour);

router.get("/login", viewsController.getLogin);
router.get("/signup", viewsController.getSignup);

module.exports = router;
