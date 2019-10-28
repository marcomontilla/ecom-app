import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2_43Dz4abvfvodjtvwtp44cq-084wfFc",
  authDomain: "ecom-db-mm.firebaseapp.com",
  databaseURL: "https://ecom-db-mm.firebaseio.com",
  projectId: "ecom-db-mm",
  storageBucket: "ecom-db-mm.appspot.com",
  messagingSenderId: "925451730631",
  appId: "1:925451730631:web:9735ab076c75e7849748e2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
