const express = require('express');

const router = express.Router();

const Homepage = require('../models/homepage.model');

router.get("", async (req, res) => {

    res.render("homepage",{})
})
// router.post("",async (req,res) => {
//     const address = await Address.create(req.body)

//     return res.status(201).send({address});
// });
module.exports = router;