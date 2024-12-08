require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const artistRoutes = require("./routes/artistsRoute");
const musicRoutes = require("./routes/musicRoute");
const cors = require("cors");

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173/", // برای تست، همه منابع مجاز هستند. در Production، آدرس دقیق فرانت‌اند را وارد کنید.
    methods: ["GET", "POST", "PUT", "DELETE"], // متدهای مجاز
    credentials: true, // در صورت نیاز به ارسال کوکی‌ها
  })
);

app.use(cors());

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
