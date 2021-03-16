import style from "./Nav.module.css"

export default function Nav() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href="#">Profile</a>
            </div>
            <div className={style.item}>
                <a href="#">Messages</a>
            </div>
            <div className={style.item}>
                <a href="#">News</a>
            </div>
            <div className={style.item}>
                <a href="#">Music</a>
            </div>
            <div className={style.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}