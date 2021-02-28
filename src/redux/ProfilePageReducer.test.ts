import profilePageReducer, {
    addPostActionCreator,
    ProfilePageType,
    updateNewPostTextActionCreator
} from "./ProfilePageReducer";

let initialState: ProfilePageType;

beforeEach(() => {

    initialState = {
        posts: [
            {id: 1, post: "Hello my dear friends.", likesCounter: 2},
            {id: 2, post: "My name is Andrew.", likesCounter: 5},
            {id: 3, post: "This is my first project.", likesCounter: 3},
            {id: 4, post: "I am going to change my future.", likesCounter: 7},
        ],
        newPostText: ""
    }
})

test("new message should be send", () => {

    const endState = profilePageReducer(initialState, addPostActionCreator());

    expect(endState.posts.length).toBe(5)

})

test("new message should be update", () => {

    const newText = "NewTextMessage"

    const endState = profilePageReducer(initialState, updateNewPostTextActionCreator(newText))

    expect(endState.newPostText).toBe(newText)

})