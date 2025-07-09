import React from "react";
import Dishes from '../components/vegan.jsx';
import Halal from '../components/halal.jsx';

export default function View() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen text-gray-800">
      {/* Header */}
      <section className="container mx-auto text-center py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
          Recipes
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          Explore our collection of delicious recipes below! To learn more and unlock additional recipes, simply create an account.
        </p>
      </section>

      {/* Vegan Dishes */}
      <section className="container mx-auto bg-white rounded-2xl shadow-md py-12 mb-8">
        <Dishes />
      </section>

      {/* Halal Dishes */}
      <section className="container mx-auto bg-white rounded-2xl shadow-md py-12">
        <Halal />
      </section>
    </div>
  );
}