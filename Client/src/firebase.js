// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPypNKwiqvKmV9NuQXsaEa-vNw6YV5SkE",
  authDomain: "mern-realstate-4abd5.firebaseapp.com",
  projectId: "mern-realstate-4abd5",
  storageBucket: "mern-realstate-4abd5.appspot.com",
  messagingSenderId: "1049802887213",
  appId: "1:1049802887213:web:3899d6053aae697912a8a4",
  measurementId: "G-BL6D1L7P4W"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

export { app };