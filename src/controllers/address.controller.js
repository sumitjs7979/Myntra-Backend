const express = require('express');

const router = express.Router();

const Address = require('../models/address.model');

router.get("", async (req, res) => {

    res.render("address",{})
})
router.post("",async (req,res) => {
    const address = await Address.create(req.body)

    return res.status(201).send({address});
});
module.exports = router;