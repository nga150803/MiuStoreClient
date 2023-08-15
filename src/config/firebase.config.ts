import { initializeApp } from 'firebase/app'
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCNj5L4Bw0aTkfiRT8Hbzt-Ct-hG2TkdoY',
  authDomain: 'miu-social.firebaseapp.com',
  projectId: 'miu-social',
  storageBucket: 'miu-social.appspot.com',
  messagingSenderId: '691475074323',
  appId: '1:691475074323:web:20e20bbd65a4376426dee6',
 
  measurementId: 'G-RBBF1488BD'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const facebook = new FacebookAuthProvider()
const google = new GoogleAuthProvider()

export { auth, facebook, google }
