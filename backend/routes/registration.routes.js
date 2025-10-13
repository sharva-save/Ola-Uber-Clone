const express = require("express");
const router = express.Router();
const authToken = require("../middleware/user");

const { addUser, userLogin,getUserProfile,  logout
 } = require("../controller/user");

router.post("/create", addUser);

router.post("/login", userLogin);

router.get("/profile",authToken, getUserProfile);
router.delete("/logout", logout);

module.exports = router;
