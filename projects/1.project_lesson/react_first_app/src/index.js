import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  { id: 1, message: "Hello, yes this is dog ЪУЪ, СЮКА!", likes: "15" },
  { id: 2, message: "I am learning React!", likes: "23" },
];

const dialog = [
  { id: 1, name: "Ilia" },
  { id: 2, name: "Anna" },
  { id: 3, name: "Dovakin" },
  { id: 4, name: "Doomboy" },
];

const message = [
  { id: 1, message: "Hi!" },
  { id: 1, message: "YO!" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialog={dialog} message={message} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
