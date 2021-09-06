import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxY5XGHZN1tWAtSVyIF8ZLv4bflI_Km2c",
  authDomain: "facebook-clone-55e0c.firebaseapp.com",
  projectId: "facebook-clone-55e0c",
  storageBucket: "facebook-clone-55e0c.appspot.com",
  messagingSenderId: "238135688349",
  appId: "1:238135688349:web:aaab4d36604615a0ea2874",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
