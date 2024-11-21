const express = require("express");
const router = express.Router();

const { add, read, update, remove } = require("../controller/toDoController");

router.post("/add", add);
router.post("/read", read);
router.post("/update", update);
router.post("/delete", remove);

module.exports = router;
