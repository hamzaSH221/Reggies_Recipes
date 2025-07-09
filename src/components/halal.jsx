import React from "react";
import lamb1 from '../images/lamb2.0.webp';
import lamb2 from '../images/lamb3.png';
import meatballs from '../images/meatballs3.png';

export default function Halal() {
  const items = [
    { src: lamb1, alt: 'Slow Cooked Lamb', title: "Slow Cooked Lamb" },
    { src: lamb2, alt: 'Lamb & Rice Special', title: "Lamb & Rice Special" },
    { src: meatballs, alt: 'Meatball Curry', title: "Meatball Curry" }
  ];

  return (
    <div className="px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 text-center mb-8">
        Our Halal Dishes
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