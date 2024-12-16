require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const artistRoutes = require("./routes/artistsRoute");
const musicRoutes = require("./routes/musicRoute");
const cors = require("cors");

connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://musicpich.vercel.app",
  "https://music.varmanli.ir/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use("/api/music", musicRoutes);
app.use("/api/artists", artistRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running on ${process.env.HOST || "http://localhost"}:${PORT}`
  )
);
