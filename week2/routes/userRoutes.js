"use strict";
// userRoute

const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const userModel = require("../models/userModel");
const userSchema = require("../models/user");

router.get("/", controller.user_list_get);

router.get('/db',controller.user_db_get);

router.get("/:id", controller.user_get);

router.post("/db", async (req, res) => {
  const myUser = await userSchema.create({
    name: "Marry",
    email: "abc@abc.fi",
    password: "1234"
  });
  res.send(`user created with id: ${myUser._id}`);
});

router.post("/", (req, res) => {
  console.log("Your user data:" + req.body);
  req.body.passwd = ""; // delete password poperty from user's data
  res.json(req.body);
});

router.put("/", (req, res) => {
  res.send("With this end point you can edit users");
});

router.delete("/", (req, res) => {
  res.send("With this endpoint wyou can delete users");
});

module.exports = router;
