const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");
    console.log("Connected Database:", conn.connection.db.databaseName); 
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
