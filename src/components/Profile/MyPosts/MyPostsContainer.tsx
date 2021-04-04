import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    addPostActionCreator,
    PostType,
    ProfilePageReducerActionsType,
    updateNewPostTextActionCreator
} from "../../../redux/profilePageReducer";
import {compose, Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProfilePageReducerActionsType>): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText))
        }
    }
}


export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        mapDispatchToProps))(MyPosts)