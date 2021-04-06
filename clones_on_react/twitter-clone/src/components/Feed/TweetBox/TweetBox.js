import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "../../../firebase.js"


function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (event) => {
        event.preventDefault();

        db.collection("posts").add({
            displayName: "Ilia",
            username: "dovakin",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png"
        })
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png" />
                    <input
                        value={tweetMessage}
                        onChange={(event) => setTweetMessage(event.target.value)}
                        type="text"
                        placeholder="What's happening?"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(event) => setTweetImage(event.target.value)}
                    type="text"
                    className="tweetBox__imageInput"
                    placeholder="Enter your image..."
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweet-btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;