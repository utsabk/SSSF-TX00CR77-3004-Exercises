"use strict";
// catController

const catModel = require("../models/catModel");
const catSchema = require("../models/cat");

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  console.log("cat id parameter", req.params);
  const cat = cats.filter(cat => cat.id === req.params.id);
  res.json(cat);
};

const cat_db_get = async (req, res) => {
  res.send(await catSchema.find().populate("owner"));
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_db_get
};
