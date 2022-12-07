import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBH5o2PIZsdqHEpT-AmqpAkyJnYk_BzH3w",
  authDomain: "hair-tube.firebaseapp.com",
  projectId: "hair-tube",
  storageBucket: "hair-tube.appspot.com",
  messagingSenderId: "340806078326",
  appId: "1:340806078326:web:c40426f981c96d4e82f457",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
