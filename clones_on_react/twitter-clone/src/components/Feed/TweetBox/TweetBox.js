import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";


function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png" />
                    <input
                        type="text"
                        placeholder="What's happening?"
                    />
                </div>
                <input
                    type="text"
                    className="tweetBox__imageInput"
                    placeholder="Enter your image..."
                />
                <Button type="submit" className="tweetBox__tweet-btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;