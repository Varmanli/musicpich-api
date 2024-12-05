require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const artistRoutes = require("./routes/artistsRoute");
const musicRoutes = require("./routes/musicRoute");

connectDB();

app.use(express.json());

app.use("/api/music", musicRoutes);
app.use("/api/artists", artistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
