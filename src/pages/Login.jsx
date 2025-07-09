import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';  // Import auth from your firebase.js

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);  // State for signup success message
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/loggedIn');
    } catch (error) {
      setError('Error logging in: ' + 'Incorrect Username or Password');
    }
  };

  // Function to handle signup
  const handleSignup = async () => {
    if (!email || !password) {
      setError('Error signing up: Please fill out both fields.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSignupSuccess(true);  // Show success message after signup
      setIsSignup(false);  // Switch back to login view after successful signup
    } catch (error) {
      // Handle specific Firebase auth errors with more helpful messages
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please try another email or log in.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please use at least 6 characters.');
      } else {
        setError('Error signing up: ' + error.message);
      }
    }
  };

  // Reset error and success message when switching between login and signup
  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setError('');  // Clear the error when switching
    setSignupSuccess(false);  // Clear signup success message when toggling
  };

  // Handle form submission on Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      isSignup ? handleSignup() : handleLogin();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-pink-800 mb-6">{isSignup ? 'Sign Up' : 'Log In'}</h1>
        
        {/* Show success message when the user successfully signs up */}
        {signupSuccess && !isSignup && (
          <p className="text-green-500 text-center mb-4">Your account has been created! Please log in.</p>
        )}

        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              minLength="6"
            />
          </div>
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
          <div>
            <button
              onClick={isSignup ? handleSignup : handleLogin}
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none"
              disabled={!email || !password}
            >
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-pink-700">
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <span
            className="text-pink-500 cursor-pointer hover:underline"
            onClick={toggleSignup} // Reset error and success message when toggling
          >
            {isSignup ? 'Log In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;