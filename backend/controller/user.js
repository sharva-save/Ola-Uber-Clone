const user = require("../models/user");
const bcrypt = require("bcrypt");
const genrateAuthToken = require("../models/user");

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = await user.findOne({ $or: [{ name }, { email }] });
    if (createUser) {
      return res.status(400).json({
        message: "user with this email or name already exist ",
        success: false,
      });
    }
    // const userExist = user.findOne({ email });
    // if (userExist) {
    //   return  res
    //   .status(401)
    //   .json({ message: "User exist with this email", success: fales });
    // }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = newUser.genrateAuthToken();
    res
      .status(200)
      .json({ message: "user created", success: true, data: newUser, token });
  } catch (error) {
    console.log(
      "error in the createion of the creating the user",
      error.message
    );
  }
};

const userLogin = async (req, res) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;
    const existUser = await user.findOne({ email });

    if (!existUser) {
      return res.status(400).json({
        message: " user is not exist with this email",
        success: false,
      });
    }

    const passwordMatch = await bcrypt.compare(password, existUser.password);

    if (!passwordMatch) {
      return res.status(400).json({
        message: "password is not match",
        success: false,
      });
    }
    const token = existUser.genrateAuthToken();
    res.cookie("token", token);

    res
      .status(200)
      .json({ message: "user login successfully", success: true, token });
  } catch (error) {
    console.log("error in the  login user", error.message);
  }
};

const getUserProfile = async (req, res) => {
  res.status(200).json({ success: true, data: req.user });
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res
      .status(200)
      .json({ message: "User logout Successfully", success: true });
  } catch (error) {
    console.log("error in the logout failed clear the cookie");
  }
};

module.exports = {
  addUser,
  userLogin,
  getUserProfile,
  logout,
};
