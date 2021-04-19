import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import "./SidebarChat.css";
import db from "../../firebase.js";
import { Link } from 'react-router-dom';


function SidebarChat({ addNewChat, id, name }) {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter room name for chat");

        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
            })
        }
    };


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/gridy/:${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h3>{name}</h3>
                    <p>last message...</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat" >
            <h3>Add new Chat</h3>
        </div>
    )
}

export default SidebarChat;
