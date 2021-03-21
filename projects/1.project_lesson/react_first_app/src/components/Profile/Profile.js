import Posts from "./posts/Posts.js"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo.js"

export default function Profile(props) {

    return (
        <div className={style.content}>
            <ProfileInfo />
            <Posts posts={props.state.posts} />
        </div>
    )
}