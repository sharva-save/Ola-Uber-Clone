const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const captainSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Name should be at least 3 characters"],
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  socketId: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehical: {
    color: {
      type: String,
      minlength: [3, "Color should be at least 3 characters"],
      trim: true,
      required: true,
    },
    plate: {
      type: String,
      minlength: [3, "Plate should be at least 3 characters"],
      trim: true,
      required: true,
    },
    capacity: {
      type: Number,
      min: [1, "Capacity must be at least 1"],
      required: true,
    },
    vehicalType: {
      type: String,
      required: true,
      enum: ["car", "auto", "motercycle"],
    },
  },
  location: {
    lat: Number,
    lng: Number,
  },
});

captainSchema.methods.genrateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Captain", captainSchema);
