import React from "react";
import style from './Post.module.css';
import {PostType} from "../../../../redux/ProfilePageReducer";
import myAvatar from '../../../../assets/images/avatars/myAvatar.jpg'


type PostsPropsType = {
    posts: Array<PostType>
}

export function Post(props: PostsPropsType) {

    const postsElement =
        <React.Fragment>
            {props.posts.map(p => <div className={style.postMessage} key={p.id}>
                <img src={myAvatar}
                     alt="my_avatar"/>
               <span> {p.post} </span>
                <div className={style.like}>Like {p.likesCounter}</div>
            </div>)}
        </React.Fragment>

    return (
        <div className={style.post}>
            {postsElement}
        </div>
    );
}

