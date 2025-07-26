import React, { useState } from "react";
import bowl from '../images/bowl.jpg';
import tacos from '../images/tacos.jpg';
import spinach from '../images/spinich.jpg';
import lamb1 from '../images/lamb2.0.webp';
import lamb2 from '../images/lamb3.png';
import meatballs from '../images/meatballs3.png';
import broc from '../images/broc.png';
import pesto from '../images/pesto.png';
import thai from '../images/thai.png';

const dishes = [
  {
    id: 1,
    name: 'Tacos',
    diet: 'Vegan',
    img: tacos,
    steps: [
      'Warm corn tortillas on a skillet until pliable.',
      'Fill tortillas with shredded lettuce and seasoned vegan protein (beans or jackfruit).',
      'Top with diced peppers, corn kernels, and sliced jalapeños.',
      'Drizzle vegan cheese sauce over the tacos.',
      'Garnish with lime wedges and fresh cilantro before serving.'
    ]
  },
  {
    id: 2,
    name: 'Slow Cooked Lamb',
    diet: 'Halal',
    img: lamb1,
    steps: [
      'Season lamb with salt, pepper, and garlic powder.',
      'Brown lamb pieces in a hot skillet with oil.',
      'Transfer to a slow cooker with chopped onions and carrots.',
      'Add broth, tomato paste, and spices (cumin, coriander).',
      'Cook on low for 6–8 hours until tender.',
      'Garnish with fresh parsley and serve over rice.'
    ]
  },
  {
    id: 3,
    name: 'Tuna and Pesto Pasta',
    diet: 'Pescetarian',
    img: pesto,
    steps: [
      'Cook pasta according to package instructions; drain.',
      'In a bowl, mix cooked pasta with 3 tbsp pesto sauce.',
      'Stir in a drained can of tuna and a squeeze of lemon juice.',
      'Season with salt and pepper to taste.',
      'Serve topped with cherry tomatoes and fresh basil.'
    ]
  },
  {
    id: 4,
    name: 'Coconut Crusted Tilapia',
    diet: 'Pescetarian',
    img: broc,
    steps: [
      'Preheat oven to 200°C (400°F).',
      'Combine coconut and breadcrumbs in a bowl.',
      'Dip tilapia in beaten egg, then coat.',
      'Bake for 12–15 minutes until golden.',
      'Serve with lime wedges and cilantro.'
    ]
  },
  {
    id: 5,
    name: 'Lamb & Rice Special',
    diet: 'Halal',
    img: lamb2,
    steps: [
      'Rinse basmati rice until water runs clear.',
      'Sauté onions and garlic in oil until translucent.',
      'Add lamb cubes and brown on all sides.',
      'Stir in rice, broth, and spices (cardamom, cinnamon stick).',
      'Cover and simmer on low for 20 minutes.',
      'Fluff rice with a fork and serve with roasted almonds.'
    ]
  },
  {
    id: 6,
    name: 'Chickpea & Spinach Curry',
    diet: 'Vegan',
    img: spinach,
    steps: [
      'Heat oil in a saucepan; sauté onions, garlic, and ginger until fragrant.',
      'Add curry powder, turmeric, and cumin; toast spices for 1 minute.',
      'Stir in chickpeas and coconut milk; simmer for 10 minutes.',
      'Fold in fresh spinach and cook until wilted.',
      'Season with salt, pepper, and a squeeze of lemon juice.',
      'Serve over steamed rice or with warm naan.'
    ]
  },
  {
    id: 7,
    name: 'Meatball Curry',
    diet: 'Halal',
    img: meatballs,
    steps: [
      'Mix ground meat with spices, herbs, and an egg; form into balls.',
      'Brown meatballs in a skillet; set aside.',
      'Sauté onions, garlic, and ginger until fragrant.',
      'Add curry paste, tomatoes, and coconut milk; simmer.',
      'Return meatballs to sauce and cook for 10 minutes.',
      'Garnish with cilantro and serve with naan or rice.'
    ]
  },
  {
    id: 8,
    name: 'Vegetable Massaman Curry',
    diet: 'Pescetarian',
    img: thai,
    steps: [
      'Sauté Massaman curry paste in a drizzle of oil until aromatic.',
      'Pour in coconut milk and stir until smooth.',
      'Add mixed vegetables; simmer until tender.',
      'Season with a pinch of sugar and a splash of fish sauce.',
      'Serve over rice and garnish with fresh cilantro.'
    ]
  },
  {
    id: 9,
    name: 'Vegan Bowl',
    diet: 'Vegan',
    img: bowl,
    steps: [
      'Prep all vegetables: chop zucchini, artichoke hearts, olives, and tomatoes.',
      'Sauté zucchini and artichokes in olive oil over medium heat until lightly browned.',
      'Add tomatoes and olives; cook until tomatoes soften.',
      'Season with salt, pepper, and fresh herbs (basil or parsley).',
      'Plate the sautéed vegetables over cooked pasta or grain of choice.',
      'Drizzle with extra-virgin olive oil and serve warm.'
    ]
  }
];

export default function Dishes() {
  const [selectedDiet, setSelectedDiet] = useState('All');

  const diets = ['All', 'Vegan', 'Halal', 'Pescetarian'];

  const filteredDishes = selectedDiet === 'All'
    ? dishes
    : dishes.filter(dish => dish.diet === selectedDiet);

  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600">
          Our Dishes
        </h2>
        <select
          value={selectedDiet}
          onChange={(e) => setSelectedDiet(e.target.value)}
          className="border border-pink-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          {diets.map(diet => (
            <option key={diet} value={diet}>{diet}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDishes.map(dish => (
          <article key={dish.id} className="bg-pink-200 rounded-xl overflow-hidden shadow-lg">
            <img src={dish.img} alt={dish.name} className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">
                {dish.name}
              </h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4 text-left">
                Diet: {dish.diet}
              </h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 inline-block text-left">
                {dish.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
