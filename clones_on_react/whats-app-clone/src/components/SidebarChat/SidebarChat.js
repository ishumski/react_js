import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import "./SidebarChat.css";
import db from "../../firebase.js";
import { Link } from 'react-router-dom';


function SidebarChat({ addNewChat, id, name }) {

    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if (id) {
            db.collection("rooms")
                .doc(id)
                .collection("messages").orderBy("timestamp", "desc")
                .onSnapshot(snapshot =>
                    setMessages(snapshot.docs.map((doc) => doc.data())))
        }
    }, [id]);



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
                    <p>{messages[0]?.message}</p>
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
