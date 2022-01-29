import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyB4YYYQLaUmSHOkK2hX5TQTowMF5SEI02E",
    authDomain: "ezchat-44c36.firebaseapp.com",
    projectId: "ezchat-44c36",
    storageBucket: "ezchat-44c36.appspot.com",
    messagingSenderId: "287016412186",
    appId: "1:287016412186:web:2d4d21b81f5687c7165da3"
  }).auth();