const mongoose = require("mongoose");


const connect = () =>{
    return mongoose.connect("mongodb+srv://sumit:sumit_123@cluster0.km81j.mongodb.net/myntra?retryWrites=true&w=majority");
}

module.exports = connect;