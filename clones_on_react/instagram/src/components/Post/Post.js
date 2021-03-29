import style from "./Post.module.css"
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
    
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
            <h4 className={style.post__text}><strong>{username}</strong>: {caption}</h4>
        </div>
    )
}

export default Post;
