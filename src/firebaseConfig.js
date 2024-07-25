// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnpn2Tj-mSuLzvkFfV7WpjRuT2BooWiHY",
    authDomain: "linkedin-clone-ac9ac.firebaseapp.com",
    projectId: "linkedin-clone-ac9ac",
    storageBucket: "linkedin-clone-ac9ac.appspot.com",
    messagingSenderId: "180940493649",
    appId: "1:180940493649:web:61b11730860b12ea3b7970"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };




