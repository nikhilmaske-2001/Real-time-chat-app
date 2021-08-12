import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyDmUtMxdjOwdIsDi9eESbiJGaOrSX-xUug",
        authDomain: "unichat-8944b.firebaseapp.com",
        projectId: "unichat-8944b",
        storageBucket: "unichat-8944b.appspot.com",
        messagingSenderId: "309816130283",
        appId: "1:309816130283:web:0c95acdc8abd86f2bf1cae"
}).auth();