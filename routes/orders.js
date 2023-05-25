const express = require("express");
const router = express.Router();
const { userDataSchema } = require("../models/orders");
const validateBody = require("../middlewares/validateBody");

const ctrl = require("../controlers/orders");

router.post("/", validateBody(userDataSchema), ctrl.addOrderUser);

module.exports = router;
