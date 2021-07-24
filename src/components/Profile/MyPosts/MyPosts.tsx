import React, {useCallback} from "react";
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {CommonForm, CommonFormPropsType} from "../../common/Form/CommonForm";


export const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

    const addPost = useCallback((text: CommonFormPropsType) => {
        debugger
        props.addPost(text.newText)
    }, [props])

    return (
        <div className={style.myPosts}>
            <h2 className={style.title}>My posts</h2>
            <div className={style.container}>
                <CommonForm onSubmit={addPost}/>
                <Post posts={props.posts}
                      increase={props.increase}
                      smallImage={props.smallImage}
                />
            </div>
        </div>
    );
})

