// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { generateDish } = require('./apiRequest');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/generate', async (req, res) => {
  console.log('▶️ Body received:', req.body);
  const { diet, culture } = req.body;
  if (!diet || !culture) {
    return res.status(400).json({ error: 'Please select both a diet and a culture.' });
  }

  try {
    const output = await generateDish(diet, culture);
    console.log('✅  Generated:', output.slice(0,50), '…');
    res.json({ output });
  } catch (err) {
    console.error('🔥  generateDish failed:', err);
    res.status(500).json({ error: 'Failed to generate dish.' });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
