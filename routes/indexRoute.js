const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("this is user");
});

module.exports = Router;
