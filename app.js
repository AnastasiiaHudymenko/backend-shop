const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const producstRouter = require("./routes/products");
const orderRouter = require("./routes/orders");

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/products", producstRouter);
app.use("/users/order", orderRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
