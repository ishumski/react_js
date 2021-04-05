import React from "react";
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="widgets__widgetContainer">
                <TwitterTweetEmbed tweetId={"841418541026877441"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="BBCWorld"
                    options={{ height: 400 }}

                />
                <TwitterShareButton url="https://twitter.com/" />

            </div>

        </div>
    )
}

export default Widgets;