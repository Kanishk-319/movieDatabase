
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDjZTRLorLT-vMpL2aR7P3iwRA8ck8LAqk",
    authDomain: "fxrcs-66a28.firebaseapp.com",
    projectId: "fxrcs-66a28",
    storageBucket: "fxrcs-66a28.appspot.com",
    messagingSenderId: "1082029602303",
    appId: "1:1082029602303:web:699ce7a0988eef117c23ca",
    measurementId: "G-2GWNSHE5JH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const storage = getStorage(app)
export const db = getFirestore(app)