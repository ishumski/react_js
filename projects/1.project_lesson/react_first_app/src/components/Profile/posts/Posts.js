import React from "react";
import Post from "./post/Post.js"
import posts from "./Posts.module.css"

export default function MyPost(props) {

    let postElements = props.posts.map((p, i) => <Post key={i} message={p.message} likes={p.likes} />);

    const refItem = React.createRef();

    function addPost() {
        props.dispatch({ type: "ADD-POST" })
    }

    function onPostChange() {
        let text = refItem.current.value;
        let action = { type: "UPDATE-NEW-POST-TEXT", newText: text }
        props.dispatch(action);
    }

    return (
        <div className={posts.item}>
            <div>
                <textarea ref={refItem} onChange={onPostChange} value={props.newPostText} />
            </div>
            <button onClick={addPost}>Publish</button>
            {postElements}
        </div>
    )
}