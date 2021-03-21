import style from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

export default function DialogItem(props) {

    const link = "/dialogs/" + props.id;
    return (

        <div className={style.dialog}>
            <img src="../../../../public/images/telegram.png" alt="dialog_img"/>
            <NavLink to={link}>{props.name}</NavLink>
        </div>
    )
};