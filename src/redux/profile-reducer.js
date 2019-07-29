const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostData : [
        {id: 1, postText: 'I am realy a cat'},
        {id: 2, postText: 'Hi'},
        {id: 3, postText: 'Good day '}
    ],
    newPostText: 'it-kamasutra.com'
}
const profileReducer = (state = initialState,action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                postText: state.newPostText,
            }
            return {
                ...state,
                PostData : [...state.PostData,newPost],
                newPostText : ''
            };
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            };   
        
        default: return state;    
    }

    /*
    if(action.type === ADD_POST){


    } else if (action.type === UPDATE_NEW_POST_TEXT){
        
        return {
            ...state,
            newPostText: action.newText
        };

    } 

    return state;*/
}


export const addPostActionCreator = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export default profileReducer;