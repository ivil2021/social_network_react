import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/20/ptica_sova_oruzhie_Terminator_19253.jpg" />
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;
