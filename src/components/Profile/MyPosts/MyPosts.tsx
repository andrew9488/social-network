import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    myPosts: Array<PostType>
    newPostText: string
    addPost: (postText: string) => void
    updateNewPostText: (newPostText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const addPost = () => {
        props.addPost(props.newPostText)
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }


return (
    <div className={style.myPosts}>
        <div>
            <h4 className={style.title}>My posts</h4>
            <div>
                    <textarea value={props.newPostText}
                              onChange={onChangePostHandler}
                    />
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <Posts posts={props.myPosts}/>
        </div>
    </div>
);
}

