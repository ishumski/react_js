import Posts from "./posts/Posts.js"
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo.js"

const postData = [
    { id: 1, message: "Hello, yes this is dog ЪУЪ, СЮКА!", likes: "15" },
    { id: 2, message: "I am learning React!", likes: "23" },
];


export default function Profile() {


    return (
        <div className={style.content}>
            <ProfileInfo />
            <Posts items={postData} />
        </div>

    )

}