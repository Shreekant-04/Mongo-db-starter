const express = require("express");
const Router = express.Router();
const { user, a, b } = require("../controller/indexCont");


app.get("/", (req, res) => {
    res.send("this is user");
  });


module.exports = Router;
