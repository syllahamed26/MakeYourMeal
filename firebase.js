// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAMOQqSkr2ZjaeIlsoeVOZT81ZxTL4tlKM",
    authDomain: "makeyourmeal-1a804.firebaseapp.com",
    projectId: "makeyourmeal-1a804",
    storageBucket: "makeyourmeal-1a804.appspot.com",
    messagingSenderId: "464943026608",
    appId: "1:464943026608:web:fa09f6ea2f07560f0d8675",
    measurementId: "G-6322F44L3X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);