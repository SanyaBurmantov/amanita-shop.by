import React, {useState} from 'react';
import {IPost} from "../../../../models";
import './Post.scss'
import NoLikesHeart from '../../../../assets/icons/noLike.svg'
import {posts} from "../../../../data/Posts";

interface PostProps {
    post: IPost,
}

export const Post = ({post}: PostProps) => {

    const [count, setCount] = useState(posts)

    const LikeCount = (id: number) => {
        alert(id)
        const updateCount = count.map(post =>
            post.id === id
                ? { ...post, likeCount: ++post.likeCount} : post);
        setCount(updateCount);
    };

return (
    <div className='container__post'>
        <div className='post__image'><img src={post.image}/></div>
        <div className='post__desc'>Admin</div>
        <div className='post__title'>{post.title}</div>
        <div className='post__subtitle'>{post.subtitle}</div>
        <hr/>
        <div className='attr'>
            <div className='attr__likes'>
                <img src={NoLikesHeart} onClick={()=>LikeCount(post.id)}/>
                <div className='likes-number'>{post.likeCount}</div>
            </div>
            <div className='attr__comment'>
                <div className='comment-ico'></div>
                <div className='comment-number'>18</div>
            </div>
            <div className='attr__views'>
                <div className='views-ico'></div>
                <div className='views-number'>228</div>
            </div>
            <div className='attr__read-more'>
                <div className='read-more-text'>Читать далее</div>
                <div className='read-more-ico'></div>
            </div>
        </div>
    </div>
);
};
