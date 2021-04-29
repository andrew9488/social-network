import React from "react";
import style from "./Post.module.css";
import {PostType} from "../../../../redux/profilePageReducer";
import myAvatar from "../../../../assets/images/avatars/myAvatar.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';


type PostPropsType = {
    posts: Array<PostType>
    increase: (id: number) => void
}

export const Post = React.memo((props: PostPropsType) => {

    const increase = (id: number) => {
        props.increase(id)
    }

    const postsElement =
        <>
            {
                props.posts.map(p => <div className={style.postMessageContainer} key={p.id}>
                    <div className={style.postMessage}>
                        <img src={myAvatar}
                             alt="my_avatar"/>
                        <div className={style.text}> {p.post} </div>
                    </div>
                    <div className={style.like}
                         onClick={() => increase(p.id)}>
                        <FontAwesomeIcon icon={faHeart}/> {p.likesCounter}
                    </div>
                </div>)
            }
        </>

    return (
        <div className={style.post}>
            {postsElement}
        </div>
    );
})

