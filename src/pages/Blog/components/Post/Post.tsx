import React, {FC, useState} from 'react';
import {IPost} from "../../../../types";
import './Post.scss'
// @ts-ignore
import AdminIco from '../../../../assets/icons/AdminIco.svg'
// @ts-ignore
import NoLikesHeart from '../../../../assets/icons/noLike.svg'
import {BlogModal} from "../BlogModal/BlogModal";
import {posts} from "../../../../data/Posts";
import {Like} from "../Like/Like";
import {Viewes} from "../Views/Viewes";


interface PostProps {
    post: IPost,
}

export const Post: FC<PostProps> = ({post}) => {

    const [visible, setVisible] = useState(false)

    const [views, setViews] = useState(posts)

    const Views = (id: number) => {
        function ViewsCount() {
            if (!post.ViewedByUser) {
                return ++post.views;
            } else {
                return post.views;
            }
        }

        function ViewedByUser() {
            return post.ViewedByUser = true;
        }

        const updateArrTwo = views.map(post => post.id === id ? {
            ...post,
            views: ViewsCount(),
            ViewedByUser: ViewedByUser()
        } : post)
        setViews(updateArrTwo);
    }

    return (
        <div className='post'>
            <div className='post__container'>
                <div className='post__container-click' onClick={() => setVisible(true)}>
                    <div className='post__container-views' onClick={() => Views(post.id)}>
                        <div className='post__container-views-image'><img src={post.image}/></div>
                        <div className='post__container-views-admin'>
                            <div className='post__container-views-admin-image'><img src={AdminIco}/></div>
                            <div className="post__container-views-admin-other">
                                <div className='post__container-views-admin-other-text'>Администратор</div>
                                <div className='post__container-views-admin-other-data'>{post.PostData}</div>
                            </div>
                        </div>
                        <div className='post__container-views-title'>{post.title}</div>
                        <div className='post__container-views-subtitle'>{post.subtitle}</div>
                        <div></div>
                    </div>
                </div>
                <hr/>
                <div className='post__container-attr'>
                    <div className='post__container-attr-likes'>
                        <Like post={post} />
                    </div>
                    <div className='post__container-attr-comment'>
                        <div className='post__container-attr-comment-ico'><img src={NoLikesHeart}/></div>
                        <div className='post__container-attr-comment-number'>228</div>
                    </div>
                    <div className='post__container-attr-views'>
                        <Viewes post={post}/>
                    </div>
                </div>
            </div>
            <BlogModal visible={visible} setVisible={setVisible} post={post} />
        </div>
    );
};
