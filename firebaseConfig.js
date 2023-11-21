import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyAMOQqSkr2ZjaeIlsoeVOZT81ZxTL4tlKM",
    authDomain: "makeyourmeal-1a804.firebaseapp.com",
    projectId: "makeyourmeal-1a804",
    storageBucket: "makeyourmeal-1a804.appspot.com",
    messagingSenderId: "464943026608",
    appId: "1:464943026608:web:fa09f6ea2f07560f0d8675",
    measurementId: "G-6322F44L3X"
};

let app = null;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app();
}

const auth = firebase.auth();
export {auth};