import style from "./Dialogs.module.css";

export default function Dialogs() {
    return (

        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>Ilia</div>
            </div>
            <div className={style.messages}>
                <div className={style.dialog}>Hi</div>
                <div className={style.dialog}>Yep!</div>
            </div>
        </div>

    )
}