import React from "react";
import foodImage from "./images/food.png";
import locationIcon from "./images/location.png";
import Nav from './components/Nav.jsx'

function App() {
  return (
    <div className="bg-pink-100 min-h-screen">
       <Nav />


      {/* Welcome Section */}
      <section className="relative text-center my-20">
        <img src={foodImage} alt="Food" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-6">
          <h2 className="text-3xl font-bold">Welcome to Reggie's Recipes!</h2>
          <p className="text-lg mt-5">
            Welcome to Reggie's Recipes, a proud small business rooted in the heart of Stoke-on-Trent.
            We've been serving our community with love and flavour for years.
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="text-center py-16 ">
        <h1 className="text-4xl font-bold text-red-900 mb-6">Find Us in Hanley</h1>
        <img src={locationIcon} alt="Location Icon" className="mx-auto mb-6 w-36 h-36" />
        <p className="text-lg max-w-xl mx-auto text-gray-800 px-4">
          Reggie's Recipes is proudly located in the heart of Hanley, Stoke-on-Trent (ST1 2OP). 
          Whether you're a local or just passing through, we'd be absolutely delighted to welcome you. 
          Come visit us and experience the warm atmosphere, delicious recipes, and the heart of our small business community. 
          We can't wait to serve you!
        </p>
      </section>

    </div>
  );
}

export default App;
