import React, { useState } from "react";
import b1 from '../images/brownie1.png';
import b2 from '../images/brownie2.png';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';

const desserts = [
  {
    id: 1,
    name: 'Caramel Brownies',
    type: 'Brownies',
    img: b1,
    steps: [
      'Melt 100g butter and 100g dark chocolate; stir in 150g sugar and 2 eggs.',
      'Fold in 75g flour, 25g cocoa powder, and a pinch of salt.',
      'Pour batter into the pan and drizzle 100g caramel sauce on top.',
      'Bake for 20–25 minutes until set; cool before cutting.'
    ]
  },
  {
    id: 2,
    name: 'Cookie Dough Pancakes',
    type: 'Pancakes',
    img: p1,
    steps: [
      'Whisk pancake batter according to mix instructions.',
      'Fold in small scraps of edible cookie dough.',
      'Heat a nonstick pan over medium and lightly grease.',
      'Pour batter to form pancakes; cook until bubbles appear.',
      'Flip and cook until golden on both sides.',
      'Serve warm with maple syrup and extra cookie dough bits.'
    ]
  },
  {
    id: 3,
    name: 'Lotus Cake',
    type: 'Cake',
    img: c1,
    steps: [
      'Crush 200g Lotus biscuits and mix with 75g melted butter; press into a springform pan.',
      'Beat 300g cream cheese with 100g sugar, 2 eggs, and 100g Biscoff spread until smooth.',
      'Pour the filling over the crust and smooth the top.',
      'Chill in the fridge for at least 4 hours until fully set.',
      'Sprinkle extra biscuit crumbs on top before serving.'
    ]
  },
  {
    id: 4,
    name: 'Chocolate Fudge Cake',
    type: 'Cake',
    img: c2,
    steps: [
      'Combine 200g crushed biscuits with 75g melted butter and press into a lined cake tin.',
      'Heat 200g dark chocolate and 100g condensed milk until smooth; pour over the base.',
      'Stir in 50g chopped nuts or extras if desired for texture.',
      'Chill for at least 2 hours until firm.',
      'Top with chocolate shavings or ganache before serving.'
    ]
  },
  {
    id: 5,
    name: 'Brownie Cookies (Brookies)',
    type: 'Brownies',
    img: b2,
    steps: [
      'Scoop tablespoon-sized dollops of brownie batter onto the sheet.',
      'Top each with a small ball of cookie dough and gently press down.',
      'Bake for 12–15 minutes until brownies are set around the edges.',
      'Cool on the sheet before transferring to a rack to finish cooling.'
    ]
  },
  {
    id: 6,
    name: 'Lotus Filled Pancakes',
    type: 'Pancakes',
    img: p2,
    steps: [
      'Whisk pancake batter according to package instructions.',
      'Pour a small circle of batter onto a hot, greased skillet.',
      'Drop 1 tsp Lotus Biscoff spread into the center of the batter.',
      'Cover with a bit more batter to seal in the filling.',
      'Cook until bubbles form on top, then flip and cook until golden.',
      'Serve warm, drizzled with extra Lotus spread if desired.'
    ]
  }
];

export default function Desserts() {
  const [selectedType, setSelectedType] = useState('All');
  const types = ['All', 'Brownies', 'Pancakes', 'Cake'];
  const filteredDesserts =
    selectedType === 'All'
      ? desserts
      : desserts.filter((dessert) => dessert.type === selectedType);

  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600">
          Our Desserts
        </h2>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-pink-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDesserts.map((dessert) => (
          <article
            key={dessert.id}
            className="bg-pink-200 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={dessert.img}
              alt={dessert.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">
                {dessert.name}
              </h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4 text-left">
                Type: {dessert.type}
              </h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 inline-block text-left">
                {dessert.steps.map((step, idx) => (
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
