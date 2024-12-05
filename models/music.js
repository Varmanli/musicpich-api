const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  music_url: { type: String, required: true },
  cover_url: { type: String, required: true },
});

module.exports = mongoose.model("Music", musicSchema, "songs"); 
