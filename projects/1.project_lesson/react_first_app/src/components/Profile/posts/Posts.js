import React from "react";
import Post from "./post/Post.js"
import posts from "./Posts.module.css"

export default function MyPost(props) {

    let postElements = props.posts.map((p, i) => <Post key={i} message={p.message} likes={p.likes} />);

    const refItem = React.createRef();

    function addPost() {
        const text = refItem.current.value;
        alert(text);
    }
    return (
        <div className={posts.item}>
            <div>
                <textarea ref={refItem}></textarea>
            </div>
            <button onClick={addPost} >Publish</button>
            {postElements}
        </div>
    )
}