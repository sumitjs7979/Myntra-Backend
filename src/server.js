const express = require("express");

const connect = require("./configs/db");

//const Product = require('./models/product.model')

const app = express();
app.use(express.json());
const productController = require("./controllers/product.controller");
const loginController = require("./controllers/login.controller");
app.use("/products", productController);
app.use("/login", loginController);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, async () => {
  await connect();
  console.log("Server is listening on port 3000");
});
