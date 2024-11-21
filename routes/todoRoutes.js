const express = require("express");
const Router = express.Router();

const { add, read, update, remove } = require("../controller/toDoController");

Router.post("/add", add);
Router.get("/read", read);
Router.get("/update", update);
Router.get("/delete", remove);

module.exports = Router;
