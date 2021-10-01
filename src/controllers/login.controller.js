const express = require("express");

const router = express.Router();

const Login = require("../models/login.model");

router.post("/user", async (req, res) => {
  const user = await Login.create(req.body);
  return res.send({ user });
});
router.get("/show", async (req, res) => {
  const show = await Login.find();
  return res.send({ show });
});

module.exports = router;
