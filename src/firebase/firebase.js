import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj3mDqycQ4IDsJoc-TYEqB0nabW-ooJKg",
  authDomain: "basic-crud-app-b164e.firebaseapp.com",
  databaseURL: "https://basic-crud-app-b164e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "basic-crud-app-b164e",
  storageBucket: "basic-crud-app-b164e.appspot.com",
  messagingSenderId: "911831178641",
  appId: "1:911831178641:web:d6537fa997d5d3ea9e8e30",
  measurementId: "G-XCEKMTNZ7C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };

export default app;