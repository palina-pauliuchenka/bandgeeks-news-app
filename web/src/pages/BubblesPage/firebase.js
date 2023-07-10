// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOrjlO3gQLxTvpVKQ1M5U9KFYP9te953s",
  authDomain: "bubbles-web-app.firebaseapp.com",
  projectId: "bubbles-web-app",
  storageBucket: "bubbles-web-app.appspot.com",
  messagingSenderId: "315494218126",
  appId: "1:315494218126:web:548d5277702b1c11138cdf",
  measurementId: "G-0YC4DCV79E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
