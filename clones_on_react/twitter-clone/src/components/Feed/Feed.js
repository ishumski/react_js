import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "../Post/Post.js";
import TweetBox from "./TweetBox/TweetBox.js";
import db from "../../firebase.js";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);


    return (
        <div className="feed">
            <div className="feed__header">
                <h3>Home</h3>
            </div>

            <TweetBox />

            {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verifide={post.verifide}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}

                />
            ))}
        </div>
    )
}

export default Feed;