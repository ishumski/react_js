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
import firebase from "firebase";
import { useStateValue } from "../StateProvider/StateProvider.js"


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });

            db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });

        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3 >{roomName}</h3>
                    <p >
                        Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                                timestamp?.toDate()
                        ).toUTCString()}
                    </p>
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
            <div className='chat__body'>
                {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && 'chat__reciver'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
            </div>
            <div className='chat__footer'>

                <form>
                    <EmojiEmotionsIcon />
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        type="text"
                        placeholder="Type a message"

                    />

                    <Button type="submit" onClick={sendMessage} className="chat__footer-btn"> Send a Message</Button>
                    <MicIcon />
                </form>

            </div>

        </div>
    )
}

export default Chat;
