const express = require("express");
const { getAllArtists, getArtistById } = require("../controller/artistController");

const router = express.Router();

router.get("/", getAllArtists);
router.get("/:id", getArtistById);

module.exports = router;
