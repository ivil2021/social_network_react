import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        { id: 1, message: 'how arvgdgddhe you', like: 172 },
        { id: 2, message: 'it is my first project', like: 125 },
        { id: 2, message: 'blabla', like: 236 },
        { id: 2, message: 'dada', like: 12789 },
    ];

    let postsElements = posts.map((post) => (
        <Post message={post.message} like={post.like} />
    ));

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
                {postsElements}
                {/* <Post message={postsData[0].message} like={postsData[0].like} />
                <Post message={postsData[1].message} like={postsData[1].like} /> */}
            </div>
        </div>
    );
};

export default MyPosts;
