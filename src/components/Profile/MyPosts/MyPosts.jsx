import React, { Component } from 'react';
import Post from './Post/Post.jsx';
import profile from '../Profile.module.css';

const MyPosts = (props) => {

    let PostsArr = 
        props.PostData.map( p=> <Post message={p.postText}/>);

    let newPostElement = React.createRef();

    let onAddPost = () =>{
        props.addPost();
    }
    
    let onPostChange = () =>{
        let text=newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div >
                {PostsArr}
            </div>
            <div className={profile.addPost}>
                <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
                <div>
                    <button onClick = { onAddPost }>Send</button>
                </div>
            </div>
        </div>
    );

}

export default MyPosts;