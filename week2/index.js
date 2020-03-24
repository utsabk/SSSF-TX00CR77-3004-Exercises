"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoutes");
const passport = require("./utils/pass");
const authRoute = require("./routes/authRoutes");

require("dotenv").config();
const app = express();
const db = require("./models/db");
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", authRoute);
app.use("/cat", passport.authenticate("jwt", { session: false }), catRoute);
app.use("/user", passport.authenticate("jwt", { session: false }), userRoute);
app.use(cors());

db.on("connected", () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
