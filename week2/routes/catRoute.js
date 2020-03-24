"use strict";
// catRoute

const express = require("express");
const multer = require("multer");
const router = express.Router();
const controller = require("../controllers/catController");

const catModel = require("../models/catModel");
const catSchema = require("../models/cat");


const upload = multer({ dest: "./uploads/" });

router.get("/", controller.cat_list_get);

router.get("/db", controller.cat_db_get);

router.get("/:id", controller.cat_get);

router.post("/db", async (req, res) => {
  const myCat = await catSchema.create({ name: "Kitty", age: 6, owner:'5e7a512195deb1dadb59a1b6' });
  res.send(`cat created with id: ${myCat._id}`);
});
router.post("/", upload.single("cat"), (req, res) => {
  res.send("With this end point you can add cats");
});

router.put("/", (req, res) => {
  res.send("With this end point you can edit cats");
});

router.delete("/", (req, res) => {
  res.send("With this endpoint wyou can delete cats");
});

module.exports = router;
