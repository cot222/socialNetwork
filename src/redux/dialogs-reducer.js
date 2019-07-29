const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE= 'SEND-MESSAGE';


let initialState = {
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
}
const dialogsReducer = (state = initialState,action) => {

    switch(action.type){

        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };
          
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, {id: 6, message: body}]
            };     
         
        default: return state;    
    }

    /*if(action.type === UPDATE_NEW_MESSAGE_BODY){
        return {
            ...state,
            newMessageBody: action.body
        };
    }
    else if(action.type === SEND_MESSAGE){
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messageData: [...state.messageData, {id: 6, message: body}]
        };
    }

    default: return state;*/
}


export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE }
}
export const updateNewMessageBodyCreactor = (text) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: text}
}
export default dialogsReducer;