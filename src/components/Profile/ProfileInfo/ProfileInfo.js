import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    alt="something went wrong"
                    src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg"
                />
            </div>
            <div className={s.descritionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;
