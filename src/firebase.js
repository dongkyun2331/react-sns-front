import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDXyhnBn_c1sr_R9O3XM9tyyFawlfgcmIQ",
    authDomain: "pori-sns.firebaseapp.com",
    databaseURL: "https://pori-sns-default-rtdb.firebaseio.com",
    projectId: "pori-sns",
    storageBucket: "pori-sns.appspot.com",
    messagingSenderId: "180277115171",
    appId: "1:180277115171:web:17d0bbd5fc982b12c7f496",
  })
  .auth();
