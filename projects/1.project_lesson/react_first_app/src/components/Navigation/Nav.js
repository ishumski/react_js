import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Friend from "../Friends/Friend/Friend.js"

export default function Nav() {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/friends" activeClassName={style.activeLink}>Friends</NavLink>
                <div className={style.friends}>
                    <Friend name="Ilia" />
                    <Friend name="Ilia" />
                    <Friend name="Ilia" />
                </div>
            </div>
        </nav>
    )
}