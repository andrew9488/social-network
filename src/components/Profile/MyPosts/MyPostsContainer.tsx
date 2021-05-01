import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPost, increaseLike, PostType, ProfilePageReducerActionsType} from "../../../redux/profilePageReducer";
import {compose, Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
    smallImage: string | null
}

type MapDispatchPropsType = {
    addPost: (text: string) => void
    increase: (id: number) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        smallImage: state.profilePage.profile.photos.small
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProfilePageReducerActionsType>): MapDispatchPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPost(text))
        },
        increase: (id: number) => {
            dispatch(increaseLike(id))
        }
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        mapDispatchToProps))(MyPosts)