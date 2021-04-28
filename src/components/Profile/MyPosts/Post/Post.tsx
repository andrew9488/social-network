import React from "react";
import style from './Post.module.css';
import {PostType} from "../../../../redux/profilePageReducer";
import myAvatar from '../../../../assets/images/avatars/myAvatar.jpg'

type PostPropsType = {
    posts: Array<PostType>
    increase: (id: number, like: number) => void
}

export const Post = React.memo((props: PostPropsType) => {

    const increase = (id: number, like: number) => {
        props.increase(id, like)
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
                         onClick={() => increase(p.id,p.likesCounter)}> Like {p.likesCounter}</div>
                </div>)
            }
        </>

    return (
        <div className={style.post}>
            {postsElement}
        </div>
    );
})

