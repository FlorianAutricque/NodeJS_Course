const express = require("express");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", viewsController.getOverview);

router.get("/tour/:slug", viewsController.getTour);

<<<<<<< HEAD
router.get("/login", viewsController.getLogin);
=======
router.get("/login", viewsController.getLoginForm);
router.get("/signup", viewsController.getSignupForm);
>>>>>>> a96d638e3abbd94ab8432e1932ce3cdde6e10259

module.exports = router;
