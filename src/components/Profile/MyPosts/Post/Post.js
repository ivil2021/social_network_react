import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/20/ptica_sova_oruzhie_Terminator_19253.jpg" />
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;
