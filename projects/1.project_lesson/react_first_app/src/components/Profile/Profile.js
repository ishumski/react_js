import Posts from "./posts/Posts.js"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo.js"

export default function Profile(props) {

    return (
        <div className={style.content}>
            <ProfileInfo />
            <Posts posts={props.profilePage.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}