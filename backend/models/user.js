const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength:[3, "name should be atleast 3 charters long"]
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },

  socketId:{
    type:String
  }
});

userSchema.methods.genrateAuthToken = function () {
  const token = jwt.sign({_id: this._id} ,process.env.JWT_SECRET, {expiresIn:'24h'})
  return token  
}

module.exports = mongoose.model("user", userSchema);
