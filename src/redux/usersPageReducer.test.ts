import usersPageReducer, {follow, InitialStateType, unFollow} from "./usersPageReducer";

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

