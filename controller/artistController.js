const Artist = require("../models/artist.js");

exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();

    if (artists.length === 0) {
      return res.status(404).json({ message: "No artists found" });
    }

    res.status(200).json(artists);
  } catch (err) {
    console.error("Error in getAllArtists:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.status(200).json(artist);
  } catch (err) {
    console.error("Error in getArtistById:", err.message);
    res.status(500).json({ error: err.message });
  }
};
