const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Nastia:HmHhSr62gx7NZ8SK@cluster0.zvbuz2e.mongodb.net/shops_products?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3002, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
