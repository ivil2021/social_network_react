import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'how are you', like: 12 },
        { id: 2, message: 'it is my first project', like: 125 },
        { id: 3, message: 'qwerty', like: 148 },
        { id: 4, message: ';xkjfpsf000', like: 178205 },
        { id: 5, message: 'kofk', like: 15425 },
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} like={postsData[0].like} />
                <Post message={postsData[1].message} like={postsData[1].like} />
                <Post message={postsData[2].message} like={postsData[2].like} />
                <Post message={postsData[3].message} like={postsData[3].like} />
                <Post message={postsData[4].message} like={postsData[4].like} />
            </div>
        </div>
    );
};

export default MyPosts;
