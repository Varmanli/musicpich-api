const express = require("express");
const { getAllMusic, getMusicById } = require("../controller/songController");

const router = express.Router();

router.get("/", getAllMusic);
router.get("/:id", getMusicById);

module.exports = router;