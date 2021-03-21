import Post from "./post/Post.js"
import posts from "./Posts.module.css"

export default function MyPost(props) {

    let postElements = props.posts.map((p, i) => <Post key={i} message={p.message} likes={p.likes} />)

    return (
        <div className={posts.item}>
            <div>
                <textarea></textarea>
            </div>
            <button>Publish</button>
            {postElements}
        </div>
    )
}