import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import "./SidebarChat.css";

function SidebarChat({ addNewChat, roomName }) {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter room name for chat");

        if (roomName) {
            return <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/gridy/:${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{roomName}</h2>
                    <p>last message...</p>
                </div>
            </div>
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/gridy/:${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{roomName}</h2>
                <p>last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat" >
            <h3>Add new Chat</h3>
        </div>
    )
}

export default SidebarChat;
