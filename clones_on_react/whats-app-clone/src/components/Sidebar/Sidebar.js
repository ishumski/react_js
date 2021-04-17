import React from 'react';
import "./Sidebar.css";
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from '../SidebarChat/SidebarChat';

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
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input
                    type="text"
                    placeholder="Search"
                />
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat="sidebarChat" />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
