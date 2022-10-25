import React, {useState} from 'react';
import {IPost} from "../../../../types";
import './Best.scss'
import {posts} from "../../../../data/Posts";
import {BlogModal} from "../BlogModal/BlogModal";


interface OnePostProps {
    post: IPost
}

export const Best = ({post}: OnePostProps) => {

    const [visible, setVisible] = useState(false)

    const [count, setCount] = useState(posts)

    const LikeCount = (id: number) => {

        const updateArr = count.map(post => post.id === id ? {...post, likeCount: Count(), liked: Liked()} : post);

        function Count() {
            if (!post.liked) {
                return ++post.likeCount;
            } else {
                return --post.likeCount;
            }
        }
        function Liked() {
            return post.liked = !post.liked;
        }

        setCount(updateArr);
    }

    return (
        <>
        <div className='best'>
            <div className='best-container' onClick={()=> setVisible(true)}>
                <div className='best-text'>
                    <div className='best-text-title'>{post.title}</div>
                    <div className='best-text-data'>{post.PostData}</div>
                </div>
                <div className='best-image'><img src={post.image}/></div>
            </div>
        </div>
            <BlogModal visible={visible} setVisible={setVisible} post={post} LikeCount={LikeCount} />
        </>
    );
};
