import style from "./Post.module.css"
import Avatar from "@material-ui/core/Avatar";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import firebase from "firebase";

function Post({ postId, user, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }
        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        
        });
        setComment('');
    };

    return (
        <div className={style.post}>
            <div className={style.post__header}>
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3 className={style.post__username}>{username}</h3>
            </div>

            <img className={style.post__image} src={imageUrl} alt="" />
            <h4 className={style.post__text}><strong>{username}</strong> {caption}</h4>

            <div className={style.post__comments}>
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>

            
            {user && (// <---убирает комменты, если ты разлогенен
                <form className={style.post__commentBox}>
                    <input
                        className={style.post__input}
                        placeholder="Add a comment..."
                        type="text"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <button
                        className={style.post__button}
                        type="submit"
                        disabled={!comment}
                        onClick={postComment}
                    >
                        Post
                </button>
                </form>
            )}
        </div>
    )
}

export default Post;
