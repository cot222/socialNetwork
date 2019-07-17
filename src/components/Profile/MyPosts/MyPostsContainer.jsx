import React, { Component } from 'react';
import MyPosts from "./MyPosts"
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {

    //let state = props.store.getState();
    return <StoreContext.Consumer>
    {
        (store) => 
        {
            let state = store.getState();

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            };
            
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);   
            };
          return <MyPosts 
            updateNewPostText={onPostChange} 
            addPost={addPost}
            props={props.posts} PostData={state.profilePage.PostData} 
            newPostText={state.profilePage.newPostText} />
        }

    }

    </StoreContext.Consumer>
}
*/
let mapStateToProps = (state) => {  //возвращает стэйт
    return {
        PostData: state.profilePage.PostData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {   //возвращает функции диспатч
    return {

        updateNewPostText: (text) =>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);  
        },
        addPost: () =>{
            dispatch(addPostActionCreator());
        }
    }
}



const SuperMyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default SuperMyPostsContainer;