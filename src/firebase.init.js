// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvDQbgQWoFCbmhkBbelGCOkOYw7bxA7Co",
    authDomain: "ema-john-simple-ff3e1.firebaseapp.com",
    projectId: "ema-john-simple-ff3e1",
    storageBucket: "ema-john-simple-ff3e1.appspot.com",
    messagingSenderId: "107393967980",
    appId: "1:107393967980:web:47c78362eced5fd2423549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth