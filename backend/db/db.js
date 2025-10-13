const express = require("express");
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connectToDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connected to the mongodb successfully");
    
  } catch (error) {
    console.log("error in the connection", error);
  }
};

module.exports = connectToDb