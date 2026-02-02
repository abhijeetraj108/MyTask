const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./utils/db");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Check database connection before handling requests
app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: "Database not connected. Please check your MongoDB connection.",
    });
  }
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on port ${PORT}`);
});
