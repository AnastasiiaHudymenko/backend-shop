const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const ctrl = require("../controlers/products");

router.get("/", ctrl.getAll);

router.patch("/avatars", upload.single("avatar"), ctrl.uploadImage);

module.exports = router;
