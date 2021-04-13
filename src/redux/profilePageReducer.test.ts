import profilePageReducer, {
    addPostActionCreator,
    InitialStateType, PostType, ProfileType,
} from "./profilePageReducer";

let initialState: InitialStateType;

beforeEach(() => {

    initialState = {
        posts: [
            {id: 1, post: "Hello my dear friends.", likesCounter: 2},
            {id: 2, post: "My name is Andrew.", likesCounter: 5},
            {id: 3, post: "This is my first project.", likesCounter: 3},
            {id: 4, post: "I am going to change my future.", likesCounter: 7},
        ] as Array<PostType>,
        profile: {
            aboutMe: "Student of IT-Incubator",
            contacts: {
                facebook: null,
                website: null,
                vk: null,
                twitter: null,
                instagram: "https://www.instagram.com/__pashkevich_/",
                youtube: null,
                github: "https://github.com/andrew9488",
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "Looking vacancy of Frontend Developer by React.js",
            fullName: "Andrew Pashkevich",
            userId: 13446,
            photos: {
                small: null,
                large: null
            }
        } as ProfileType,
        status: "",
        isFetching: false
    }
})

test("new message should be send", () => {

    const post = "This is a test post"

    const endState = profilePageReducer(initialState, addPostActionCreator(post));

    expect(endState.posts.length).toBe(5)

})
