const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newText}) as const

type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export type PostType = {
    id: number
    post: string
    likesCounter: number
};

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
};

const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: "Hello my dear friends.", likesCounter: 2},
        {id: 2, post: "My name is Andrew.", likesCounter: 5},
        {id: 3, post: "This is my first project.", likesCounter: 3},
        {id: 4, post: "I am going to change my future.", likesCounter: 7},
    ],
    newPostText: ""
}

const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCounter: 0,
            };
            return {...state,
            newPostText: "",
            posts: [...state.posts, newPost]}
        case UPDATE_NEW_POST_TEXT:
            return {...state,
            newPostText: action.newPostText}
        default:
            return state;
    }
}

export default profilePageReducer;