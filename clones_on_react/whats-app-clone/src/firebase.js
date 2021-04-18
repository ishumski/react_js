import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCQr6Oc2L3-UuYMMx-EIB_XhiAIc6Yg1Ao",
    authDomain: "whats-app-clone-2112e.firebaseapp.com",
    projectId: "whats-app-clone-2112e",
    storageBucket: "whats-app-clone-2112e.appspot.com",
    messagingSenderId: "553636286912",
    appId: "1:553636286912:web:ccf31bfcf0adb629e93825"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
