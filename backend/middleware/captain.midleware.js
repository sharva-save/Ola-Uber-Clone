const Captain = require("../models/captain");
const express = require("express");
const jwt = require("jsonwebtoken");

const authToken = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const TokenCaptain = await Captain.findById(decode._id);
     if (!TokenCaptain) {
      return res.status(401).json({ message: "Captain not found" });
    }

    req.Captain = TokenCaptain;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "errro in the token " });
  }
};
module.exports = authToken;
