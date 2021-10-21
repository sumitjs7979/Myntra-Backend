const express = require("express");

const connect = require('./configs/db');


const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));
//const homeController = require('./controllers/home.controller');
const productController = require('./controllers/product.controller');
 const addressController = require('./controllers/address.controller');
//  app.use("/homepage", homeController)
app.get("/homepage", async (req, res) => {

    res.render("homepage",{})
})
app.get("/myntra_addToBag", async (req, res) => {

    res.render("myntra_addToBag",{})
})
app.get("/checkout", async (req, res) => {

    res.render("checkout",{})
})
app.get("/coupon", async (req, res) => {

    res.render("coupon",{})
})
app.get("/checkoutpage2", async (req, res) => {

    res.render("checkoutpage2",{})
})
app.get("/payment", async (req, res) => {

    res.render("payment",{})
})
app.get("/login", async (req, res) => {

    res.render("login",{})
})
app.get("/wishlist", async (req, res) => {

    res.render("wishlist",{})
})
app.use("/products", productController)
 app.use("/address", addressController)





app.listen(3000, async () => {
    await connect();
    console.log("Server is listening on port 3000")
})