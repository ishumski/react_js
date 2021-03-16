import Posts from "./posts/Posts.js"

import style from "./Profile.module.css"


export default function Profile() {
    return (
        <div className={style.content}>
            <div className={style.main_img}>
                <img src="../images/main_img.jpg" />
            </div>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        </div>
    )
}