import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAction, PostType, ProfilePageReducerActionsType} from "../../../redux/profilePageReducer";
import {compose, Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProfilePageReducerActionsType>): MapDispatchPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAction(text))
        },
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        mapDispatchToProps))(MyPosts)