import style from "./Header.module.css"

export default function Header() {
    return (
        <header className={style.header}>
            <img src="../images/telegram.png" alt="avatar_pic" />
        </header>
    )
}