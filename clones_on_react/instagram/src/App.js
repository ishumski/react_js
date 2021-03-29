import React, { useState } from "react";
import './App.css';
import Post from './components/Post/Post.js';
import firebase from "firebase";


function App() {
  
function componentDidMount(){
  const db = firebase.database();
  console.log(db)
}
componentDidMount()


  const [posts, setPost] = useState([
    {
      username: "Ilia",
      caption: "BLAAAAAA",
      imageUrl: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/09/interesting-pictures-asperatus-clouds.jpg",
    }
  ]);
  return (
    <div className="App">
      <div className="app__header">
        <img className="app__hederImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
      </div>

      {
        posts.map(post => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))
      }


    </div>
  );
}

export default App;
