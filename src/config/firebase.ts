import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4EP16oGPDB4JZ2dRuPMdbrlHEb5FGtmU",
  authDomain: "cctech-db.firebaseapp.com",
  projectId: "cctech-db",
  storageBucket: "cctech-db.firebasestorage.app",
  messagingSenderId: "901121183181",
  appId: "1:901121183181:web:90a1d575ad5becfb878884",
  measurementId: "G-RDM436KJ1S"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
