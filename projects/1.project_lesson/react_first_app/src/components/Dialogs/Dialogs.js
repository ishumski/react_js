import style from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem.js";
import Message from "./Message/Message.js";

export default function Dialogs() {

    const dialogData = [
        { id: 1, name: "Ilia" },
        { id: 2, name: "Anna" },
        { id: 3, name: "Dovakin" },
        { id: 4, name: "Doomboy" },
    ];

    const messageData = [
        { id: 1, message: "Hi!" },
        { id: 1, message: "YO!" },
    ];

    const dialogElements = dialogData.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />);

    const messagesElements = messageData.map((m, i) => <Message key={i} message={m.message} />)

    return (

        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
};