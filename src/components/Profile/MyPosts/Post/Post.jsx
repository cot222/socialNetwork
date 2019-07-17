import React, { Component } from 'react';
import MyP from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={MyP.item}>
                <img src="" alt=""/>
                <p>{props.message}</p>
            </div>

        </div>
    );

}

export default Post;