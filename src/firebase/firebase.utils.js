import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBQicchIwKdDKqkOBm3Ypxlx3odZjz6w8Y",
  authDomain: "crwn-db-ca112.firebaseapp.com",
  databaseURL: "https://crwn-db-ca112.firebaseio.com",
  projectId: "crwn-db-ca112",
  storageBucket: "crwn-db-ca112.appspot.com",
  messagingSenderId: "1021337374541",
  appId: "1:1021337374541:web:1d27e205c3585fbafab104",
  measurementId: "G-1J43E2BCRN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
