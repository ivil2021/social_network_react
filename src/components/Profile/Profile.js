import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    alt="something went wrong"
                    src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg"
                />
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
};

export default Profile;
