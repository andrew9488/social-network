let onChange = (state: RootStateType) => {
}

export const subscribe = (observer: any) => {
    onChange = observer;
}

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

type SidebarType = {}

export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
};

export let state: RootStateType = {
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
};

export const addPost = (postText:string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        post: postText,
        likesCounter: 0
    };
    state.profilePage.posts.push(newPost);
    updateNewPostText("");
    onChange(state);
}

export const updateNewPostText = (newPostText:string) => {
    state.profilePage.newPostText = (newPostText);
    onChange(state);
}

export const sendMessage = (messageText:string) => {
    const newMessage: MessageType = {
        id: new Date().getTime(),
        message: messageText,
    };
    state.dialogsPage.messages.push(newMessage);
    updateNewMessageText("");
    onChange(state);
}

export const updateNewMessageText = (newMessageText:string) => {
    state.dialogsPage.newMessageText = (newMessageText);
    onChange(state);
}
