import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBzRCJLGs58EohqJT8fTascXmnY41ezUs",
    authDomain: "twitter-clone-fbde5.firebaseapp.com",
    projectId: "twitter-clone-fbde5",
    storageBucket: "twitter-clone-fbde5.appspot.com",
    messagingSenderId: "328458856847",
    appId: "1:328458856847:web:7a56d255bcbba1fb92c3fa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db;