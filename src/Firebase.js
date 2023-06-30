// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADTaD0C48yL6DvzD4iIrevtzfoEWlA0kg",
  authDomain: "cart-bd02f.firebaseapp.com",
  projectId: "cart-bd02f",
  storageBucket: "cart-bd02f.appspot.com",
  messagingSenderId: "532581079544",
  appId: "1:532581079544:web:7ea6996deb6721d5b79e0d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebase;
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore();
