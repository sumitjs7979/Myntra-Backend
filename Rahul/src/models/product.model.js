const mongoose = require("mongoose");


//1.Create Schema
const productSchema = new mongoose.Schema({
    image : {type : String , required : false},
    Brand : {type : String, required : true},
    Type : {type : String, required : true},
    Price : {type : Number, required : true},
    id : {type : Number, required : true}
})

//2 Connect schema with product collection
const Product = mongoose.model("product",productSchema);

module.exports = Product;