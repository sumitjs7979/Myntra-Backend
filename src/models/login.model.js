const mongoose = require("mongoose");
const login_Schema = new mongoose.Schema(
  {
    mobile: { type: Number, required: true },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);
///Connect schema
const login = mongoose.model("login", login_Schema);

module.exports = login;
