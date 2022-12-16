import React, {FC, useState} from 'react';
import {posts} from "../../../../data/Posts";
// @ts-ignore
import LikesHeart from "../../../../assets/icons/Likes.svg";
// @ts-ignore
import NoLikesHeart from "../../../../assets/icons/noLike.svg";
import {IPost} from "../../../../types";

interface LikeProps {
    post: IPost,
}

export const Like: FC<LikeProps> = ({post}) => {


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
            <div className='post__container-attr-likes-ico' onClick={() => LikeCount(post.id)}><img
                src={post.liked ? LikesHeart : NoLikesHeart}/></div>
            <div className='post__container-attr-likes-number'>{post.likeCount}</div>
        </>
    );
};
