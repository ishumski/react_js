import style from "../Dialogs.module.css";

export default function Message(props) {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
};