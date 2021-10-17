import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg" />
            </div>
            <div>ava + description</div>
            <div>
                My posts
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>Post 1</div>
                </div>
                <div>
                    <div className={s.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
