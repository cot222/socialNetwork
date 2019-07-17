import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            PostData : [
                {id: 1, postText: 'I am realy a cat'},
                {id: 2, postText: 'Hi'},
                {id: 3, postText: 'Good day '}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogData : [
                {id: 1, dialog: 'Andrew Rusetskii' , img: ''},
                {id: 2, dialog: 'Dmitrii Naas' , img: ''},
                {id: 3, dialog: 'Kolya Pring' , img: ''}
            ],
            messageData : [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hello'}
            ],
            newMessageBody: ""
        },
        sidebarPage: {

        },
    },
    _callSubscriber(){
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer){  
        this._callSubscriber = observer;  //паттерн наблюдатель
    },

    dispatch(action) { // {type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage,action);
        this._callSubscriber(this._state);
    }
}

export default store;