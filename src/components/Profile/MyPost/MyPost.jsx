import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>
    )
    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>add post</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElement}
            </div>
        </div>
    )

};

export default MyPost;

