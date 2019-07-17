import React, { Component } from 'react';
import profile from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

    return (
        <div >
            <div className={profile.content}>
                <div>
                    sdssd
                </div>
                <div className={profile.ava}>
                    <img src="https://avatarko.ru/img/kartinka/2/zhivotnye_kot_galstuk_1881.jpg" alt="" />
                </div>
                <div>
                    sdssd
                </div>
            </div>



            <div className={profile.comments}>
                <div><h1>Posts</h1></div>
                <MyPostsContainer  />
            </div>
        </div>
    );

}

export default Profile;