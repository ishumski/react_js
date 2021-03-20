import style from "./ProfileInfo.module.css"

export default function ProfileInfo() {
    return (
        <div className={style.main_img}>
            <img src="../images/main_img.jpg" alt="main_avatar" />
        </div>
    )
}