import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_fYk9P-l0gHwKq1y_HeZUGuSxsaRPepc",
    authDomain: "versova-14f30.firebaseapp.com",
    projectId: "versova-14f30",
    storageBucket: "versova-14f30.appspot.com",
    messagingSenderId: "800864170165",
    appId: "1:800864170165:web:704dbc579e1068e3444efc"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };