const { Schema, model } = require("mongoose");
const Joi = require("joi");

const orderSchema = new Schema({
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
  basket: Joi.array().required(),
  orederNumber: Joi.number(),
  totalPrice: Joi.number(),
});

const userOrdersSchema = new Schema(
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
    orederNumber: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
    },

    basket: {
      type: [orderSchema],
      required: true,
    },
  },
  { versionKey: false }
);

const Order = model("order", userOrdersSchema);
module.exports = { Order, userDataSchema };
