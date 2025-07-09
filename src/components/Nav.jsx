// src/components/Nav.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine login state on loggedIn or createDish pages
  const isLoggedIn = ['/loggedIn', '/createDish'].includes(location.pathname);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleLogout = () => {
    setIsOpen(false);
    navigate('/');
  };

  // Define navigation items based on login state
  const navItems = isLoggedIn
    ? [
        { to: '/loggedIn', label: 'Home' },
        { to: '/createDish', label: 'Create Dish' }
      ]
    : [
        { to: '/', label: 'Home' },
        { to: '/view-recipes', label: 'View Recipes' },
        { to: '/login', label: 'Login' },
      ];

  return (
    <header className="bg-pink-500 text-white p-5 flex flex-col md:flex-row justify-between items-center relative z-50">
      <div className="flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl font-bold">Reggie's Recipes</h1>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 mt-4 md:mt-0 items-center">
        {navItems.map(item => (
          <Link key={item.to} to={item.to} className="hover:underline">
            {item.label}
          </Link>
        ))}
        {isLoggedIn && (
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-pink-500 text-white p-5 text-center space-y-4">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block hover:underline"
            >
              {item.label}
            </Link>
          ))}
          {isLoggedIn && (
            <button onClick={handleLogout} className="block w-full hover:underline">
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}

export default Nav;
