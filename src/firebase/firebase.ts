// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore, collection, addDoc } from 'firebase/firestore'


const firebaseConfig = {

}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
