const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name : {type : String , required : true},
    mobile_number : {type : Number, required : true},
    pincode : {type : Number, required : true},
    add : {type : String, required : true},
    locality : {type : String, required : true},
    city : {type : String, required : true},
    state : {type : String, required : true}
})

const Address = mongoose.model("address",addressSchema);
module.exports= Address;
