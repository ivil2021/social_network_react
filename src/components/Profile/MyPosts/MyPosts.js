import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src="https://avavatar.ru/images/original/3/Fv6wxCwR1IecjOBZ.jpg" />
                    Post 1
                </div>
            </div>
            <div>
                <div className={s.item}>Post 2</div>
            </div>
            <div>
                <div className={s.item}>Post 3</div>
            </div>
            <div>
                <div className={s.item}>Post 4</div>
            </div>
            <div>
                <div className={s.item}>Post 5</div>
            </div>
        </div>
    );
};

export default MyPosts;
