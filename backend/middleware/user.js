const user = require("../models/user");
const express = require("express");
const jwt = require("jsonwebtoken");


const authToken = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    const decode = jwt.decode(token, process.env.JWT_SECRET);

    const Tokenuser = await user.findById(decode._id);

    req.user = Tokenuser;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "errro in the token " });
  }
};
module.exports = authToken