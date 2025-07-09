// backend/apiRequest.js
require('dotenv').config();
const OpenAI = require('openai');

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY in .env');
}

// Instantiate the OpenAI client (v4 SDK)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Build and send a “Generate me a _ _ dish” prompt to OpenAI
 *
 * @param {string} diet
 * @param {string} culture
 * @returns {Promise<string>}
 */
async function generateDish(diet, culture) {
  const prompt =
    `Generate me a ${diet} ${culture} dish:\n` +
    `- Dish name\n` +
    `- Ingredients (with amounts)\n` +
    `- Step-by-step cooking instructions\n`;

  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 400,
    temperature: 0.7
  });

  // The returned content is in res.choices[0].message.content
  return res.choices[0].message.content.trim();
}

// Export as an object so you can do: const { generateDish } = require('./apiRequest')
module.exports = { generateDish };
