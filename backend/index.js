const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require("dotenv").config();
const connectToDb = require("./db/db");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

connectToDb();
const userRoute = require("./routes/registration.routes");
const captainRoute = require("./routes/captain.route");

app.use(cors())
app.use(cookieParser())
app.use("/user", userRoute)

app.use("/captain" ,captainRoute)






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
