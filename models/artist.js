const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  image_url: { type: String, required: true }, 
});

module.exports = mongoose.model("Artist", artistSchema, "artists"); 
