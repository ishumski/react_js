import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayName, username, verifide, text, image, avatar }) {
    return (
        <div className="post">
            <Avatar src={avatar} />
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                                {verifide && <VerifiedUserIcon className="post__badge" />}  @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="mem" />
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