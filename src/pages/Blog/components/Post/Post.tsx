import React, {useState} from 'react';
import {IPost} from "../../../../models";
import './Post.scss'
import NoLikesHeart from '../../../../assets/icons/noLike.svg'
import LikesHeart from '../../../../assets/icons/Likes.svg'
import {posts} from "../../../../data/Posts";

interface PostProps {
    post: IPost,
}

export const Post = ({post}: PostProps) => {

    const [count, setCount] = useState(posts)

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

    const LikeCount = (id: number) => {
        const updateArr = count.map(post => post.id === id ? {...post, likeCount: Count(), liked: Liked()} : post);
        setCount(updateArr);
    }

    return (
        <div className='container__post'>
            <div className='post__image'><img src={post.image}/></div>
            <div className='post__desc'>Admin</div>
            <div className='post__title'>{post.title}</div>
            <div className='post__subtitle'>{post.subtitle}</div>
            <hr/>
            <div className='attr'>
                <div className='attr__likes'>
                    <div onClick={() => LikeCount(post.id)}>
                        <img src={post.liked ? LikesHeart : NoLikesHeart}/>
                    </div>
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
