import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    addPostActionCreator,
    PostType,
    ProfilePageReducerActionsType,
    updateNewPostTextActionCreator
} from "../../../redux/ProfilePageReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch<ProfilePageReducerActionsType>): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)