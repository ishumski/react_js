import style from "./Post.module.css"
import Avatar from "@material-ui/core/Avatar";


function Post() {
    const username = "Ilia Shumski";
    return (
        <div className={style.post}>
            <div className={style.post__header}>
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3 className={style.post__username}>Username</h3>
            </div>

            <img className={style.post__image} src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2013/09/interesting-pictures-asperatus-clouds.jpg" alt="" />
            <h4 className={style.post__text}><strong>Username</strong> : bla bla bla</h4>
        </div>
    )
}

export default Post;