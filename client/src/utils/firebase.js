
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "demoo-f7545.firebaseapp.com",
  projectId: "demoo-f7545",
  storageBucket: "demoo-f7545.firebasestorage.app",
  messagingSenderId: "166022972752",
  appId: "1:166022972752:web:c278b72864cd627cd79855"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}