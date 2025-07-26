// backend/apiRequest.js

// Load environment variables from .env in local development
require('dotenv').config();

const { Configuration, OpenAIApi } = require('openai');

// Pull your OpenAI key from the environment
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

// Initialize the OpenAI client
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * generateDish
 * @param {string} diet - e.g. "vegetarian", "vegan", "halal", "pescatarian"
 * @param {string} culture - e.g. "chinese", "french", "spanish", etc.
 * @returns {Promise<string>} - the text response from OpenAI
 */
async function generateDish(diet, culture) {
  // Build the prompt
  const prompt = `
Please suggest a creative and delicious ${culture} dish that fits a ${diet} diet.
List:
1) The name of the dish
2) A one-sentence description
3) 3–5 bullet-pointed ingredients or steps.
  `.trim();

  // Call the OpenAI Completion API
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 200,
    temperature: 0.8,
  });

  // Extract and return the text
  return response.data.choices[0].text.trim();
}

module.exports = { generateDish };
