// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ViewRecipes from './pages/View';
import CreateDish from './pages/createDish';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-pink-100">
      {/* Persistent navigation at the top */}
      <Nav />

      {/* Main content grows to fill available space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-recipes" element={<ViewRecipes />} />
          <Route path="/createDish" element={<CreateDish />} />
        </Routes>
      </main>

      

      {/* Footer sticks to bottom when content is short */}
      <Footer />
    </div>
  );
}

export default App;
