const { Schema, model } = require("mongoose");
const Joi = require("joi");

const OrderSchema = new Schema({
  shopName: String,
  title: String,
  price: Number,
  count: Number,
});

const userDataSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});

const ordersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    backet: [OrderSchema],
  },
  { versionKey: false }
);

const Order = model("order", ordersSchema);
module.exports = { Order, userDataSchema };
