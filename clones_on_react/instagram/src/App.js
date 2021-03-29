import React, { useState, useEffect } from "react";
import './App.css';
import Post from './components/Post/Post.js';
import { db } from "./firebase.js";

function App() {

  const [posts, setPost] = useState([
    // {
    //   username: "Ilia",
    //   caption: "BLAAAAAA",
    //   imageUrl: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/09/interesting-pictures-asperatus-clouds.jpg",
    // }
  ]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPost(snapshot.docs.map(doc => doc.data()));
    })
  }, []);


  return (
    <div className="App">
      <div className="app__header">
        <img className="app__hederImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
      </div>

      {
        posts.map((post, i) => (
          <Post
            key={i}
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
