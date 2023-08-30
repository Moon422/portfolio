// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZM8SQMepKyBbB7Q-fJkF1Sxufrj9Yo4g",
    authDomain: "portfolio-base-39f19.firebaseapp.com",
    projectId: "portfolio-base-39f19",
    storageBucket: "portfolio-base-39f19.appspot.com",
    messagingSenderId: "828553722108",
    appId: "1:828553722108:web:56198516e958e7a12e7f79",
    measurementId: "G-KFD3JTFT5M"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
