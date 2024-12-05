const Music = require("../models/music");

exports.getAllMusic = async (req, res) => {
  try {
    const music = await Music.find().populate({
      path: "artist_id", 
      select: "name genre", 
    });
    if (music.length === 0) {
      return res.status(404).json({ message: "No music found" });
    }

    res.status(200).json(music);
  } catch (err) {
    console.error("Error in getAllMusic:", err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getMusicById = async (req, res) => {
  try {
    const music = await Music.findById(req.params.id).populate({
      path: "artist_id",
      select: "name genre",
    });

    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }

    res.status(200).json(music);
  } catch (err) {
    console.error("Error in getMusicById:", err.message);
    res.status(500).json({ error: err.message });
  }
};
