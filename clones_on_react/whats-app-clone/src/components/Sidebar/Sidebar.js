import React from 'react';
import "./Sidebar.css";
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {

    function showMessage() {
        alert("You're greate!")
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton onClick={showMessage}>
                        <DonutLargeIcon  />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>



                </div>

            </div>
            <div className="sidebar__search"></div>
            <div className="sidebar__chats"></div>
        </div>
    )
}

export default Sidebar
