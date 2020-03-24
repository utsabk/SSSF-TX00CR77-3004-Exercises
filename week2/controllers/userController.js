"use strict";
// userController

const userModel = require("../models/userModel");
const userSchema = require("../models/user");

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  console.log("user id parameter", req.params);
  const user = users.filter(user => user.id === req.params.id);
  res.json(user);
};

const user_db_get = async(req, res)=>{
const user = await userSchema.find()
}

module.exports = {
  user_list_get,
  user_get,
  user_db_get
};
