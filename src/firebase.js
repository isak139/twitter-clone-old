import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAlfPwHKnFvvu229kc3_Ahb28dSA1vHbXs",
    authDomain: "twitter-clone-fcd56.firebaseapp.com",
    projectId: "twitter-clone-fcd56",
    storageBucket: "twitter-clone-fcd56.appspot.com",
    messagingSenderId: "486748526571",
    appId: "1:486748526571:web:091620ca6efa5fb3772bae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();