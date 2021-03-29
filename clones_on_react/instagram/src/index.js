import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

const firebaseConfig = {
apiKey: "AIzaSyD_uCAIaLuEjaEc65JBSXyuo1i53eHvaWc",
    authDomain: "instagram-655ce.firebaseapp.com",
    databaseURL: "https://instagram-655ce-default-rtdb.firebaseio.com",
    projectId: "instagram-655ce",
    storageBucket: "instagram-655ce.appspot.com",
    messagingSenderId: "1041912238044",
    appId: "1:1041912238044:web:d6948ed51e280d35628919",
    measurementId: "G-J77L7Z3Y4H"
}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
