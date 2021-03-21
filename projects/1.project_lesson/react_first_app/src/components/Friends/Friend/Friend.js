import style from "./Friend.module.css";

export default function Friend(props) {
    return (

        <div className={style.friend}>
            <div className={style.circle}></div>
            <span>{props.name}</span>
        </div>
    )
}