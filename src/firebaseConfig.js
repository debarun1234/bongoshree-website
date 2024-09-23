import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore for storing blogs

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBIhCP3oVmHZBhMamR9IbmGyYH46WHqAg",
  authDomain: "bongoculturalassoc.firebaseapp.com",
  projectId: "bongoculturalassoc",
  storageBucket: "bongoculturalassoc.appspot.com",
  messagingSenderId: "85017087646",
  appId: "1:85017087646:web:a73ae0bdcf0f13ac5d358f",
  measurementId: "G-DT0X9TNCEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
