import React, {useState} from 'react';
import {IPost} from "../../../../types";
import './Best.scss'
import AdminIco from "../../../../assets/icons/AdminIco.svg";
import RemoveIco from "../../../../assets/icons/remove-add.svg";
import LikesHeart from "../../../../assets/icons/Likes.svg";
import NoLikesHeart from "../../../../assets/icons/noLike.svg";
import OpenEyes from "../../../../assets/icons/openeyes.png";
import {posts} from "../../../../data/Posts";


interface OnePostProps {
    post: IPost
}

export const Best = ({post}: OnePostProps) => {

    const [visible, setVisible] = useState(false)

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
        <>
        <div className='best'>
            <div className='best-container' onClick={()=> setVisible(true)} >
                <div className='best-text'>
                    <div className='best-text-title'>{post.title}</div>
                    <div className='best-text-data'>{post.PostData}</div>
                </div>
                <div className='best-image'><img src={post.image}/></div>
            </div>

        </div>
    <div className={visible ? 'post-more active' : 'post-more'} onClick={() => setVisible(false)}>
        <div className={visible ? 'post-more-item active' : 'post-more-item'}
             onClick={(e) => e.stopPropagation()}>
            <div className='post-more-bloc'>
                <div className='post-more-bloc-admin'>
                    <div className='post-more-bloc-admin-image'><img src={AdminIco}/></div>
                    <div className="post-more-bloc-admin-other">
                        <div className='post-more-bloc-admin-other-text'>Администратор</div>
                        <div className='post-more-bloc-admin-other-data'>{post.PostData}</div>
                    </div>
                </div>
                <div className='post-more-bloc-remove' onClick={() => setVisible(false)}><img src={RemoveIco}/>
                </div>
            </div>
            <div className='post-more-title'>{post.title}</div>
            <div className='post-more-subtitle'>{post.subtitle}</div>
            <div className='post-more-image'><img src={post.image}/></div>
            <div className='post-more-attr'>
                <div className='post-more-attr__likes'>
                    <div className='post-more-attr__likes-ico'  onClick={() => LikeCount(post.id)}><img
                        src={post.liked ? LikesHeart : NoLikesHeart}/></div>
                    <div className='post-more-attr__likes-number'>{post.likeCount}</div>
                </div>
                <div className='post-more-attr__views'>
                    <div className='post-more-attr__views-ico'><img
                        src={OpenEyes}/></div>
                    <div className='post-more-attr__views-number'>{post.views} Просмотров</div>
                </div>
            </div>
            <hr/>
            <div className='post-more-comment'>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
                <div>Говно</div>
            </div>
        </div>
    </div>
    </>
    );
};
