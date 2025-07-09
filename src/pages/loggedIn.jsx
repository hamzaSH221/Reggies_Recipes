import React from "react";
import Dishes from "../components/vegan";
import Halal from "../components/halal";

function LoggedIn() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen text-gray-800">
      {/* Header */}
      <header className="container mx-auto py-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-4">
          Welcome!
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          So good to have you here! Browse our delicious dishes below, and unlock even more inspiration by creating an account.
        </p>
      </header>

      {/* Vegan Dishes Section */}
      <section className="container mx-auto py-12">
        <Dishes />
      </section>

      {/* Halal Dishes Section */}
      <section className="container mx-auto py-12 bg-white rounded-2xl shadow-md">
        <Halal />
      </section>

      {/* Create Dish CTA */}
      <section className="container mx-auto py-16 text-center">
        <div className="inline-block bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            Create Your Own Dish
          </h2>
          <p className="text-lg mb-6">
            Want to create a new recipe ? Click the button below!
          </p>
          <a
            href="/createdish"
            className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition"
          >
            Create Dish
          </a>
        </div>
      </section>
    </div>
  );
}

export default LoggedIn;