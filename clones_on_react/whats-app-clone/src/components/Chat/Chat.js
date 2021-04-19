import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { Avatar, Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router';
import db from '../../firebase.js';


function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });
        }

    }, [roomId])


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000))
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        console.log(input);
        setInput("");
    };


    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/bottts/:${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>last message...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">

                <p className={`chat__message ${true && "chat__reciver"}`}>
                    <span className="chat__name ">mr. white</span>
                    Hi, bro! great application
                    <span className="chat__timestamp">12:54</span>
                </p>

            </div>
            <div className="chat__footer">
                <form>
                    <EmojiEmotionsIcon />
                    <input
                        type="text"
                        placeholder="Type a message"
                        value={input}
                        onChange={(event) => {
                            setInput(event.target.value)
                        }}

                    />
                    <Button
                        type="submit"
                        className="chat__footer-btn"
                        onClick={sendMessage}
                    >
                        Send
                    </Button>
                    <MicIcon />
                </form>
            </div>
        </div>
    )
}

export default Chat;
