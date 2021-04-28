import React, {useCallback} from "react";
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {CommonForm, CommonFormType} from "../../common/Form/CommonForm";


export const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

    const addPost = useCallback((text: CommonFormType) => {
        props.addPost(text.newText)
    }, [props])

    return (
        <div className={style.myPosts}>
            <h2 className={style.title}>My posts</h2>
            <div className={style.container}>
                <CommonForm onSubmit={addPost}/>
                <Post posts={props.posts}
                      increase={props.increase}
                />
            </div>
        </div>
    );
})

