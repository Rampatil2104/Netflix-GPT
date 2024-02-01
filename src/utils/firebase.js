// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHez3vbO3FbdZiCF8zdroyuGG7nav8r2Y",
  authDomain: "netflixgpt-689b7.firebaseapp.com",
  projectId: "netflixgpt-689b7",
  storageBucket: "netflixgpt-689b7.appspot.com",
  messagingSenderId: "265879436624",
  appId: "1:265879436624:web:920d8e6d0c664cad6b0055",
  measurementId: "G-ETBZ66Y0FM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
