import post from "./Post.module.css";

export default function Post(props) {
    return (
        <div className={post.item}>
            <div>
                <img src="#" />
                {props.message}
            </div>
            <span>Like: {props.likes}</span>
        </div>
    )
}