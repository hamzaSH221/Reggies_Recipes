import React from "react";
import Book from "../images/book.png";
import Chef from "../images/chef.png";

function Options() {
  return (
    <div className="bg-pink-50 text-gray-800">
      {/* Recipes Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <img
              src={Book}
              alt="Recipe Book"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              Browse Recipes
            </h2>
            <p className="mb-6 text-lg">
              Explore our handpicked recipes collection. Sign up to unlock even more delicious ideas!
            </p>
            <a
              href="/view-recipes"
              className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-shadow shadow-md"
            >
              View Recipes
            </a>
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="container mx-auto px-6 py-16 bg-white rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 md:space-x-reverse">
          <div className="flex-1">
            <img
              src={Chef}
              alt="Chefs Smiling"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              Meet The Chefs
            </h2>
            <p className="mb-6 text-lg">
              Learn about the talented chefs behind your favorite dishes. Get inspired by their stories!
            </p>
            <a
              href="/meet-chefs"
              className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-shadow shadow-md"
            >
              Meet The Chefs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Options;
