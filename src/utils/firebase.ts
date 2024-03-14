// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `grine-house.firebaseapp.com`,
  projectId: `grine-house`,
  storageBucket: `grine-house.appspot.com`,
  messagingSenderId: `183619162423`,
  appId: `1:183619162423:web:319f5564a70d0ca81e0ab2`,
  measurementId: `G-FPRZ3DT193`,
};

// Initialize Firebase
const app = firebaseConfig?.apiKey ? initializeApp(firebaseConfig) : undefined;
const analytics = app && getAnalytics(app);

export { app, analytics };
