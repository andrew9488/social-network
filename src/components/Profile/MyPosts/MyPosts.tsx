import React, {ChangeEvent} from "react";
import style from './MyPosts.module.css';
import {Posts} from "./Post/Posts";
import {ActionType,PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfilePageReducer";

type MyPostsPropsType = {
    myPosts: Array<PostType>
    newPostText: string
    dispatch: (acton: ActionType) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newText))
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

