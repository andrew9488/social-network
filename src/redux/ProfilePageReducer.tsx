import {ActionType, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newText}) as const


const profilePageReducer = (state: ProfilePageType, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCounter: 0,
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export default profilePageReducer;