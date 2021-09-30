const express = require('express');

const router = express.Router();

const Product = require('../models/product.model');
//-----------------------------------------------CRUD apis---------------------------------------------------------

//get all product data
router.get("",async (req,res) => {
    const products = await Product.find().lean().exec();

    return res.status(200).send({products});
});


//get data sort by brand
router.get("/brand",async(req,res) => {
    const products = await Product.find().sort({Brand : 1}).lean().exec();

    return res.status(200).send({products});
});


//get data sort by type
router.get("/type", async(req,res) => {
    const products = await Product.find().sort({Type : 1}).lean().exec();

    return res.status(200).send({products});
})



//get data sort by price in ascending order
router.get("/price", async(req,res) => {
    const products = await Product.find().sort({Price : 1}).lean().exec();

    return res.status(200).send({products});
})

// Sort product data by price in descending order
router.get("/pricer", async(req,res) => {
    const products = await Product.find().sort({Price : -1}).lean().exec();

    return res.status(200).send({products});
})

//get only data for Brand = Roadster
router.get("/roadster", async(req,res) => {
    const products = await Product.find({Brand : "Roadster"}).lean().exec();

    return res.status(200).send({products});
})


//get data for only brand = freeauthority
router.get("/freeAuthority", async(req,res) => {
    const products = await Product.find({Brand : "Free Authority"}).lean().exec();

    return res.status(200).send({products});
})


//get data for only brand = Puma
router.get("/puma", async(req,res) => {
    const products = await Product.find({Brand : "Puma"}).lean().exec();

    return res.status(200).send({products});
})


//get data for only brand = HRX
router.get("/hrx", async(req,res) => {
    const products = await Product.find({Brand : "HRX"}).lean().exec();

    return res.status(200).send({products});
})


//get data for only brand = wrogn
router.get("/wrogn", async(req,res) => {
    const products = await Product.find({Brand : "WROGN"}).lean().exec();

    return res.status(200).send({products});
})


//get data for only brand = huetrap
router.get("/huetrap", async(req,res) => {
    const products = await Product.find({Brand : "Huetrap"}).lean().exec();

    return res.status(200).send({products});
})


//get data for only brand = Quancious
router.get("/quancious", async(req,res) => {
    const products = await Product.find({Brand : "QUANCIOUS"}).lean().exec();

    return res.status(200).send({products});
})

module.exports = router;