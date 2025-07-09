import React from "react";
import foodImage from "../images/food.png";
import locationIcon from "../images/location.png";
import Options from '../components/options.jsx';

function Home() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen text-gray-800">

      {/* Welcome Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={foodImage}
          alt="Delicious dish"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
            Welcome to Reggie's Recipes!
          </h1>
          <p className="text-base sm:text-xl text-white max-w-2xl drop-shadow-sm">
            A proud small business rooted in the heart of Stoke-on-Trent. We've been serving our community with love and flavour for years.
          </p>
          <a href="/view-recipes">
            <button className="mt-4 px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-shadow shadow-md">
              Explore Recipes
            </button>
          </a>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 px-4">
        <div className="container mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-6">
          <img src={locationIcon} alt="Location Icon" className="w-24 h-24" />
          <h2 className="text-2xl sm:text-4xl font-bold text-red-600">
            Our Location
          </h2>
          <p className="text-lg text-center max-w-xl">
            Reggie's Recipes is proudly located in the heart of Hanley, Stoke-on-Trent (ST1 2OP). Whether you're a local or just passing through, we'd be delighted to welcome you. Come visit us and experience our warm atmosphere and delicious recipes!
          </p>
        </div>
      </section>

      {/* Options Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <Options />
        </div>
      </section>

    </div>
  );
}

export default Home;
