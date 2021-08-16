const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const indexController = require("../controllers/indexController");
const usersController = require("../controllers/usersController");
const auth = require("../utils/auth");

router.get("/", indexController.home);
router.get("/signin", usersController.signinPage);
router.get("/signup", usersController.signupPage);
router.get("/logout", usersController.logout);
router.get("/admin", auth, adminController.home);


router.post("/user/signin", usersController.signin);
router.post("/user/signup", usersController.signup);
router.post("/admin/email", auth, adminController.email);

module.exports = router;
