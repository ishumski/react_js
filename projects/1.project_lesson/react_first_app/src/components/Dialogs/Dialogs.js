import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.js";
import Message from "./Message/Message.js";
import React from "react";

export default function Dialogs(props) {

    const dialogElements = props.state.dialog.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} />);

    const messagesElements = props.state.message.map((m, i) => <Message key={i} message={m.message} />)

    const ref = React.createRef();

    function addMessage() {
        const message = ref.current.value;
        alert(message);
    }

    return (

        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={ref}></textarea>
                <button onClick={addMessage} >Add post</button>
            </div>

        </div>
    )
};