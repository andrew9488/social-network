import React from "react";
import style from './Post.module.css';
import {PostType} from "../../../../redux/ProfilePageReducer";


type PostsPropsType = {
    posts: Array<PostType>
}

export function Post(props: PostsPropsType) {

    const postsElement =
        <div className={style.postMessage}>
            {props.posts.map(p => <div key={p.id}>
                <img src="https://static.wikia.nocookie.net/2d179f22-be3c-4985-b921-f2093efbd523"
                     alt="avatar"/>
                {p.post}
                <div>Like {p.likesCounter}</div>
            </div>)}
        </div>

    return (
        <div className={style.post}>
            {postsElement}
        </div>
    );
}

