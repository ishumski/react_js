import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayName, username, verifide, text, image }) {
    return (
        <div className="post">
            <Avatar src="https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png" />
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Mr. White{" "}
                        <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @white
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>First hardcode tweet</p>
                    </div>
                </div>
                <img src="https://thumbs.gfycat.com/BabyishOfficialEnglishpointer-size_restricted.gif" alt="mem" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <FavoriteBorderIcon />
                    <PublishIcon />
                </div>
            </div>
        </div>
    )
}

export default Post;