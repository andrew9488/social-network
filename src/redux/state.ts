const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof sendMessageActionCreator>| ReturnType<typeof updateNewMessageTextActionCreator>

export const addPostActionCreator = () => ({type: ADD_POST}) as const

export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newText}) as const

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE}) as const

export const updateNewMessageTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newText}) as const

export type MessageType = {
    id: number
    message: string
};
export type DialogType = {
    id: number
    name: string
};
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
};

export type PostType = {
    id: number
    post: string
    likesCounter: number
};
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
};

export  type SidebarType = {}

export type StateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
};

export type RootStoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export const store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hello my dear friends.", likesCounter: 2},
                {id: 2, post: "My name is Andrew.", likesCounter: 5},
                {id: 3, post: "This is my first project.", likesCounter: 3},
                {id: 4, post: "I am going to change my future.", likesCounter: 7},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Anton"},
                {id: 2, name: "Oleg"},
                {id: 3, name: "Anna"},
                {id: 4, name: "Julia"},
                {id: 5, name: "Rimma"},
            ],
            messages: [
                {id: 1, message: "Hello my friend!"},
                {id: 2, message: "What are you doing?"},
                {id: 3, message: "Will you go to the cinema with us?"},
                {id: 4, message: "Can i help you?"},
            ],
            newMessageText: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                post: this._state.profilePage.newPostText,
                likesCounter: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber();
        }
        if (action.type === SEND_MESSAGE) {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber();
        }
        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber();
        }
    }
}




