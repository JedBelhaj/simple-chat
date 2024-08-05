// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOdYZhOLswziiJP_LJzQQYYAV4cU1enqU",
  authDomain: "cardgame-682ab.firebaseapp.com",
  projectId: "cardgame-682ab",
  storageBucket: "cardgame-682ab.appspot.com",
  messagingSenderId: "986291118360",
  appId: "1:986291118360:web:213c0fb79a6de6d6b57e6d",
  measurementId: "G-2GQBFJ3PVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);