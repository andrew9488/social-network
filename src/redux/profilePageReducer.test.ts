import profilePageReducer, {
    addPost, increaseLike,
    InitialStateType, PostType, ProfileType, setIsFetchingProfileComponent, setProfileStatus, setUserProfileData,
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

    const endState = profilePageReducer(initialState, addPost(post));

    expect(endState.posts.length).toBe(5)

})

test("correct user profile page should be set", () => {

    const profile = {
        lookingForAJob: true,
        lookingForAJobDescription: "Looking a job",
        fullName: "Veronika Valerievna",
        userId: 1,
        photos: {
            small: null,
            large: null
        }
    } as ProfileType

    const endState = profilePageReducer(initialState, setUserProfileData(profile));

    expect(endState.profile.fullName).toBe("Veronika Valerievna")
    expect(endState.profile.userId).toBe(1)

})

test("correct profile should be fetch", () => {

    const endState = profilePageReducer(initialState, setIsFetchingProfileComponent(true))

    expect(endState.isFetching).toBe(true)

})

test("status should be set", () => {

    const status = "This is my new status"

    const endState = profilePageReducer(initialState, setProfileStatus(status))

    expect(endState.status).toBe("This is my new status")

})

test("correct post like should increase", () => {

    const endState = profilePageReducer(initialState, increaseLike(2))

    expect(endState.posts[1].likesCounter).toBe(6)

})
