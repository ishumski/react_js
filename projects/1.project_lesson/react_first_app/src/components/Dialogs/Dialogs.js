import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.js";
import Message from "./Message/Message.js";
import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/State.js"

export default function Dialogs(props) {
    let state = props.store.getState().dialogsPage;

    const dialogElements = state.dialog.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} />);
    const messagesElements = state.messages.map((m, i) => <Message key={i} message={m.message} />)
    const newMessageBody = state.newMessageBody;

    const ref = React.createRef();

    function sendOnMessageClick() {
        props.store.dispatch(sendMessageCreator())
    }

    function onNewMessageChange(event) {
        let body = event.target.value;

        props.store.dispatch(updateNewMessageBodyCreator(body));

    }

    return (

        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div> {dialogElements}</div>
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>

            </div>
            <div>
                <textarea ref={ref} onChange={onNewMessageChange} value={newMessageBody}></textarea>
                <button onClick={sendOnMessageClick}>Add message</button>
            </div>
        </div>
    )
};



