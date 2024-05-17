import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp1JOg-agq9zZBBKqme2QSGvNdNDhf7Tc",
  authDomain: "godseye-de159.firebaseapp.com",
  projectId: "godseye-de159",
  storageBucket: "godseye-de159.appspot.com",
  messagingSenderId: "330320904177",
  appId: "1:330320904177:web:92ce26646cd14686888e50",
  measurementId: "G-KGJV4E48RW",
};

const config = firebase.default.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default config;
