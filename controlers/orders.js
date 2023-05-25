const { Order } = require("../models/orders");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const addOrderUser = async (req, res) => {
  const result = await Order.create(req.body);
  res.status(201).json(result);
};

module.exports = { addOrderUser: ctrlWrapper(addOrderUser) };
