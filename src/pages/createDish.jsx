// src/pages/createDish.jsx
import React, { useState } from 'react';

function CreateDish() {
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
      const res = await fetch('/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ diet, culture }),
      });
      const data = await res.json();

      if (res.ok && data.output) {
        setOutput(data.output);
      } else {
        setError(data.error || `Server error: ${res.status}`);
      }
    } catch (e) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <div className="space-y-8">
        {/* Dietary Preferences Section */}
        <section className="bg-pink-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Step 1: Choose a Diet</h2>
          <div className="flex flex-wrap gap-4">
            {['Vegetarian', 'Vegan', 'Halal', 'Pescatarian'].map(option => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="diet"
                  value={option.toLowerCase()}
                  checked={diet === option.toLowerCase()}
                  onChange={() => setDiet(option.toLowerCase())}
                  className="h-5 w-5 text-pink-600"
                />
                <span className="text-gray-700 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Cultural Selection Section */}
        <section className="bg-pink-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Step 2: Choose a Culture</h2>
          <div className="flex flex-wrap gap-4">
            {['Chinese', 'Pakistani', 'French', 'Spanish', 'Russian'].map(option => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="culture"
                  value={option.toLowerCase()}
                  checked={culture === option.toLowerCase()}
                  onChange={() => setCulture(option.toLowerCase())}
                  className="h-5 w-5 text-pink-600"
                />
                <span className="text-gray-700 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Generate Button */}
        <div className="text-center">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg transition disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Now'}
          </button>
        </div>

        {/* Error & Output */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {output && (
          <div className="mx-auto my-4 max-w-prose rounded-lg border border-black bg-gray-50 px-6 py-4 text-gray-800 whitespace-pre-wrap">
            {output}
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateDish;