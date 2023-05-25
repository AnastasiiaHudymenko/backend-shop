const { Schema, model } = require("mongoose");

const productsSchema = new Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { versionKey: false }
);

const Product = model("product", productsSchema);

module.exports = Product;
