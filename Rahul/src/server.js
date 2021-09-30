const express = require("express");
const mongoose = require('mongoose');

const connect = require('./configs/db');

//const Product = require('./models/product.model')

const app = express();

const productController = require('./controllers/product.controller');

app.use("/products",productController)

app.set("view engine" , "ejs");
app.use(express.static("public"));



app.listen(3000, async () =>{
    await connect();
    console.log("Server is listening on port 3000")
})