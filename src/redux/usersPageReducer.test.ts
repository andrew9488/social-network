import usersPageReducer, {
    follow,
    InitialStateType,
    setCurrentPage, setFollowingProgress, setIsFetchingUsersComponent,
    setTotalCount,
    setUsers,
    unFollow
} from "./usersPageReducer";

let initialState: InitialStateType;

beforeEach(() => {

    initialState = {
        users: [
            {
                id: 1, name: "Anton Borozna", status: "I am learning JAVA", followed: true, uniqueUrlName: null,
                photos: {
                    small: "http://pm1.narvii.com/7066/ae35e5668d78c2a362c4b594a3aa4687e77e1062r1-1200-1207v2_uhq.jpg",
                    large: null
                },
                location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 2, name: "Misha Dubeiko", status: "I want to grow hair", followed: false, uniqueUrlName: null,
                photos: {
                    small: "https://static.wikia.nocookie.net/onepunchman/images/9/9d/Darkshine_Anime_Profile.png/revision/latest?cb=20191112212432",
                    large: null
                },
                location: {country: "Denmark", city: "Kopenhagen"}
            },
            {
                id: 3,
                name: "Anna Storm",
                status: "I won’t take advice from Andrew",
                followed: true,
                uniqueUrlName: null,
                photos: {
                    small: "http://pm1.narvii.com/7066/ae35e5668d78c2a362c4b594a3aa4687e77e1062r1-1200-1207v2_uhq.jpg",
                    large: null
                },
                location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 4,
                name: "Dmitriy Prokopovich",
                status: "Why Kate don't love me?",
                followed: false,
                uniqueUrlName: null,

                photos: {
                    small: "https://steamuserimages-a.akamaihd.net/ugc/840335235114018527/2BC1ABBB312428E16725B7AD99BEC0309D87B4A7/",
                    large: null
                },
                location: {country: "Belgium", city: "Antwerpen"}
            },
        ],
        pageSize: 10,
        totalCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as Array<number>,
        disableButton: false
    }
})

test("user should be followed", () => {

    const endState = usersPageReducer(initialState, follow(2));

    expect(endState.users[1].followed).toBe(true)

})
test("user should be unfollowed", () => {

    const endState = usersPageReducer(initialState, unFollow(1));

    expect(endState.users[0].followed).toBe(false)

})

test("correct user should be set", () => {


    const users = [{
        id: 5, name: "Veronika Gorelova", status: "I am Frontend Developer", followed: true, uniqueUrlName: null,
        photos: {
            small: "",
            large: null
        },
        location: {country: "Russia", city: "Moscow"}
    }]

    const endState = usersPageReducer(initialState, setUsers(users))

    expect(endState.users.length).toBe(1)
    expect(endState.users[0].name).toBe("Veronika Gorelova")

})

test("current page should be set", () => {

    const page = 12

    const endState = usersPageReducer(initialState, setCurrentPage(page))

    expect(endState.currentPage).toBe(12)
})

test("total count should be set", () => {

    const count = 5

    const endState = usersPageReducer(initialState, setTotalCount(count))

    expect(endState.totalCount).toBe(5)
})

test("is fetching", () => {

    const endState = usersPageReducer(initialState, setIsFetchingUsersComponent(true))

    expect(endState.isFetching).toBe(true)

})

test("button should be disable, when follow user", ()=>{

    const endState = usersPageReducer(initialState, setFollowingProgress(true, 1))

    expect(endState.followingInProgress).toEqual([1])

})