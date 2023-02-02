import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCImAAPX1SAV_XqXrUCywsiD_wOkl8IgaQ",
  authDomain: "newflix-clone.firebaseapp.com",
  projectId: "newflix-clone",
  storageBucket: "newflix-clone.appspot.com",
  messagingSenderId: "107068626750",
  appId: "1:107068626750:web:3a7eb73e6dc7765657be6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebseAuth = getAuth(app);