import React, { useState } from 'react';

export default function CreateDish() {
  const [diet, setDiet] = useState('');
  const [culture, setCulture] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setError('');
    setOutput('');
    if (!diet || !culture) {
      setError('Please select both a diet and a culture.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('https://my-recipes-api.onrender.com/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ diet, culture }),
      });
      const data = await res.json();
      if (res.ok && data.output) setOutput(data.output);
      else setError(data.error || `Server error: ${res.status}`);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-gray-50 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-8">
          Create Your Dish
        </h1>

        {/* Step 1: Diet */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Step 1: Choose a Diet
          </h2>
          <div className="flex flex-wrap gap-6">
            {['Vegetarian', 'Vegan', 'Halal', 'Pescatarian'].map(option => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="diet"
                  value={option.toLowerCase()}
                  checked={diet === option.toLowerCase()}
                  onChange={() => setDiet(option.toLowerCase())}
                  className="h-5 w-5 text-pink-600 focus:ring-pink-400"
                />
                <span className="text-gray-700 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Step 2: Culture */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Step 2: Choose a Culture
          </h2>
          <div className="flex flex-wrap gap-6">
            {['Chinese', 'Pakistani', 'French', 'Spanish', 'Russian'].map(option => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="culture"
                  value={option.toLowerCase()}
                  checked={culture === option.toLowerCase()}
                  onChange={() => setCulture(option.toLowerCase())}
                  className="h-5 w-5 text-pink-600 focus:ring-pink-400"
                />
                <span className="text-gray-700 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Generate Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="inline-flex items-center px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow transition disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Now'}
          </button>
        </div>

        {/* Feedback */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {output && (
          <div className="mt-4 rounded-lg border border-white bg-pink-500 p-6 text-white whitespace-pre-wrap text-center">
            {output}
          </div>
        )}
      </div>
    </div>
  );
}
