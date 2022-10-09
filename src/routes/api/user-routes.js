const router = require("express").Router();
const userController = require("../../../controllers/user-controller");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/", userController.getUserData);

module.exports = router;
