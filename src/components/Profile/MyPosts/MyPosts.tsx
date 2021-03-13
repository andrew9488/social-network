import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/ProfilePageReducer";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const addPostText = () => {
        props.addPost()
    }

    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return (
        <div className={style.myPosts}>
            <h2 className={style.title}>My posts</h2>
            <div className={style.container}>
                <div className={style.field}>
                    <textarea value={props.newPostText}
                              onChange={onChangePostText}
                    />
                    <div>
                        <button onClick={addPostText}>Add Post</button>
                    </div>
                </div>
                <Post posts={props.posts}/>
            </div>
        </div>
    );
}

