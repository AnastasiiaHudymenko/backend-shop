const express = require("express");
const router = express.Router();
const Product = require("../models/products");
const upload = require("../middlewares/upload");
const uploadImage = require("../controlers/products");

router.get("/", async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
  }
});

router.patch("/avatars", upload.single("avatar"), uploadImage);

module.exports = router;
