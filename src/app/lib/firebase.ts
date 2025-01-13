
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3NINl9M8HJro9eu_UxoqrvaUAN4j-HN4",
  authDomain: "std21092.firebaseapp.com",
  projectId: "std21092",
  storageBucket: "std21092.firebasestorage.app",
  messagingSenderId: "206392373169",
  appId: "1:206392373169:web:e9d6c8bd92baa892d95790",
  measurementId: "G-DH7J6RLJH0"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth }; 
