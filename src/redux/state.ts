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

export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
};

export type RootStoreType = {
    _state: RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (newPostText: string) => void
    sendMessage: (messageText: string) => void
    updateNewMessageText: (newMessageText: string) => void
    _callSubscriber: (_state: RootStateType) => void
    subscribe: (observer: any) => void
    getState:()=> void
}

export let store: RootStoreType = {
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
    getState(){
        return this._state
    },
    _callSubscriber(_state: RootStateType) {},
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    addPost(postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            post: postText,
            likesCounter: 0
        };
        this._state.profilePage.posts.push(newPost);
        store.updateNewPostText("");
        this._callSubscriber(this._state);
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = (newPostText);
        this._callSubscriber(this._state);
    },
    sendMessage(messageText: string) {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: messageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        store.updateNewMessageText("");
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = (newMessageText);
        this._callSubscriber(this._state);
    },

}

