import { getAuth} from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6HwoJNAlCRCIOZ6AFSbyVhg0C8daoeyw",
  authDomain: "mynetflixgpt-cda24.firebaseapp.com",
  projectId: "mynetflixgpt-cda24",
  storageBucket: "mynetflixgpt-cda24.appspot.com",
  messagingSenderId: "1063089460361",
  appId: "1:1063089460361:web:4c72e0a24752d257662258",
  measurementId: "G-9WR28T6WPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();