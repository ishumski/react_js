import React from "react";
import "./Feed.css";
import Post from "../Post/Post.js";
import TweetBox from "./TweetBox/TweetBox.js";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>HEADEEEEEEEEEEEER</h2>
            </div>
            <TweetBox />
            <Post />
        </div>
    )
}

export default Feed;