import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJ-mY25qHksVhec_aZriRsnPpZNEQIsGc',
  authDomain: 'real-estate-market-76682.firebaseapp.com',
  projectId: 'real-estate-market-76682',
  storageBucket: 'real-estate-market-76682.appspot.com',
  messagingSenderId: '682295773604',
  appId: '1:682295773604:web:6f5bba37ef3ad1f00a1931',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
