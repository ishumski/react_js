/*подключаем наш firebase, firebaseApp копируем из проекта на странице progect settings */

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_uCAIaLuEjaEc65JBSXyuo1i53eHvaWc",
    authDomain: "instagram-655ce.firebaseapp.com",
    databaseURL: "https://instagram-655ce-default-rtdb.firebaseio.com",
    projectId: "instagram-655ce",
    storageBucket: "instagram-655ce.appspot.com",
    messagingSenderId: "1041912238044",
    appId: "1:1041912238044:web:d6948ed51e280d35628919",
    measurementId: "G-J77L7Z3Y4H"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
