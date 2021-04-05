import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import React from "react";

function Post() {
    return (
        <div className="post">
            <Avatar src="https://seeklogo.com/images/M/mountain-adventure-time-logo-55A1B18F0E-seeklogo.com.png" />
            <div className="post__body">
                <div className="post__header">
                    <h2>
                        Mr. White {"bla"}
                        <span>
                            <VerifiedUserIcon className="post__badge" />
                        </span>
                    </h2>
                    <div className="post__headerDescription">
                        <p>First hardcode tweet</p>
                    </div>
                </div>
                <img src="https://thumbs.gfycat.com/BabyishOfficialEnglishpointer-size_restricted.gif" alt="" />
            </div>
        </div>
    )
}

export default Post;