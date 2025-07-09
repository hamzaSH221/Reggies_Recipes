import React from "react";
import bowl from '../images/bowl.jpg';
import tacos from '../images/tacos.jpg';
import spinach from '../images/spinich.jpg';

export default function Dishes() {
  const items = [
    { src: bowl, alt: 'Vegan Bowl', title: "Vegan Bowl" },
    { src: tacos, alt: 'Vegan Tacos', title: "Vegan Tacos" },
    { src: spinach, alt: 'Chickpea & Spinach Curry', title: "Chickpea & Spinach Curry" }
  ];

  return (
    <div className="px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 text-center mb-8">
        Our Vegan Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((dish, idx) => (
          <div
            key={idx}
            className="group bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={dish.src}
              alt={dish.alt}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-pink-600 group-hover:text-pink-500">
                {dish.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}