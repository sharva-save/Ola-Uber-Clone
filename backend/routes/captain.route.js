const express = require("express");
const route = express.Router();
const { body } = require("express-validator");
const authToken = require("../middleware/captain.midleware");

const {
  createCaptain,
  loginCaptain,
  getCaptainDetails,
  logoutCaptain
} = require("../controller/captain");

route.post(
  "/register",
  [body("email").isEmail().withMessage("invalid email")],
  createCaptain
);

route.post(
  "/login",
  [body("email").isEmail().withMessage("invalid email")],
  loginCaptain
);

route.get("/getdetails", authToken, getCaptainDetails);


route.delete("/logoutCaptain", logoutCaptain);
module.exports = route;
