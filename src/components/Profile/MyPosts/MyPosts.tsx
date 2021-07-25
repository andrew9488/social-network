import React, {useCallback} from "react";
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {CommonForm, CommonFormPropsType} from "../../common/Form/CommonForm";
import {useDispatch} from "react-redux";
import {reset} from "redux-form";


export const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

    const dispatch = useDispatch()

    const addPost = useCallback((text: CommonFormPropsType) => {
        props.addPost(text.newText)
        dispatch(reset("formForSendNewText"))
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

