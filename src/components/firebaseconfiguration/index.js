import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7XvEcAVMGYZSilVwsjrEicy8uYYLO8ic",
  authDomain: "emailpasswordauthenticat-7aa3c.firebaseapp.com",
  projectId: "emailpasswordauthenticat-7aa3c",
  storageBucket: "emailpasswordauthenticat-7aa3c.appspot.com",
  messagingSenderId: "177448883674",
  appId: "1:177448883674:web:b9a773f3be558213bbdce3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getAuth(app);
export default database;
