import style from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem.js";
import Message from "./Message/Message.js";

export default function Dialogs(props) {

    const dialogElements = props.state.dialog.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} />);

    const messagesElements = props.state.message.map((m, i) => <Message key={i} message={m.message} />)

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