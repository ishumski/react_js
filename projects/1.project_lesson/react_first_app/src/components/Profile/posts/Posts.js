import Post from "./post/Post.js"
import posts from "./Posts.module.css"

export default function MyPost() {
    return (
        <div className={posts.item}>
        <Post message="Hello, yes this is dog!" likes="15"/>
        <Post message="I am learning React!" likes="23"/>
        </div>
    )
}