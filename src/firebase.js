import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2WUjHAD50MoG4jV-6bKG_C-QVuxg7RE0",
  authDomain: "reggiesrecipes-cd4a1.firebaseapp.com",
  projectId: "reggiesrecipes-cd4a1",
  storageBucket: "reggiesrecipes-cd4a1.firebasestorage.app",
  messagingSenderId: "818471303390",
  appId: "1:818471303390:web:2b434091dec81447ee6a4f",
  measurementId: "G-8C3SD5WFLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth
const auth = getAuth(app);

export { auth };
