// backend/index.js
require("dotenv").config();

const express = require("express");
const cors    = require("cors");
const { generateDish } = require("./apiRequest");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());         // allow all origins (your React app)
app.use(express.json());

// simple health check
app.get("/", (_req, res) => {
  res.send("🤖 Reggie's Recipes API is running");
});

// main endpoint
app.post("/generate", async (req, res) => {
  const { diet, culture } = req.body;
  if (!diet || !culture) {
    return res
      .status(400)
      .json({ error: "Please select both a diet and a culture." });
  }
  try {
    const output = await generateDish(diet, culture);
    res.json({ output });
  } catch (err) {
    console.error("🔥 generateDish error:", err);
    res.status(500).json({ error: "Failed to generate dish." });
  }
});

app.listen(PORT, () => {
  console.log(`🍽  API listening on http://localhost:${PORT}`);
});
