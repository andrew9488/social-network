import React from "react";
import style from './Post.module.css';
import {PostType} from "../../../../redux/profilePageReducer";
import myAvatar from '../../../../assets/images/avatars/myAvatar.jpg'

type PostPropsType = {
    posts: Array<PostType>
}

export function Post(props: PostPropsType) {

    const postsElement =
        <React.Fragment>
            {props.posts.map(p => <div className={style.postMessage} key={p.id}>
                <img src={myAvatar}
                     alt="my_avatar"/>
               <div className={style.text}> {p.post} </div>
                <div className={style.like}>Like {p.likesCounter}</div>
            </div>)}
        </React.Fragment>

    return (
        <div className={style.post}>
            {postsElement}
        </div>
    );
}

