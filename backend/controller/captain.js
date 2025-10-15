const Captain = require("../models/captain");

const createCaptain = async (req, res) => {
  console.log(req.body);

  try {
    const {
      name,
      email,
      password,
      vehical: { color, plate, capacity, vehicalType },
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !color ||
      !plate ||
      !capacity ||
      !vehicalType
    ) {
      return res
        .status(401)
        .json({ message: "all fields are required", success: false });
    }

    const emailExist = Captain.findOne({ email });

    if (emailExist) {
      return res
        .status(401)
        .json({ message: "Email is Exist", success: false });
    }

    const hashedPassword = await Captain.hashPassword(password);

    const captain = await Captain.create({
      name,
      email,
      password: hashedPassword,
      vehical: { color, plate, capacity, vehicalType },
    });

    const token = captain.genrateAuthToken();

    if (captain) {
      return res.status(200).json({
        message: "captain created successfully",
        success: true,
        token,
        data: captain,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "in thecatch block of the createion of the captain",
      success: false,
      error: error.message,
    });
  }
};

const loginCaptain = async (req, res) => {
  try {
    const { email, password } = req.body;

    const captain = await Captain.findOne({ email });

    if (!captain) {
      return res.status(400).json({
        message: "Email not found",
        success: false,
      });
    }

    const passwordMatch = await captain.comparePassword(password);

    if (!passwordMatch) {
      return res.status(400).json({
        message: "password is not matched",
        success: false,
      });
    }

    const token = captain.genrateAuthToken();
    res.cookie("token", token);

    res
      .status(200)
      .json({ message: "login successfully", success: true, token });
  } catch (error) {
    return res.status(400).json({
      message: "in the catch block of the login of the captain",
      success: false,
      error: error.message,
    });
  }
};

const getCaptainDetails = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "captaion detilss are", data: req.Captain });
  } catch (error) {
    res
      .status(400)
      .json({ message: "error in the catch block of the details" });
  }
};

const logoutCaptain = async (req, res) => {
  try {
    res.clearCookie("token")
    res
      .status(200)
      .json({ message: "captain logout Successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: "error in the catch block of the logout" });
  }
};

module.exports = {
  createCaptain,
  loginCaptain,
  getCaptainDetails,
  logoutCaptain
};
