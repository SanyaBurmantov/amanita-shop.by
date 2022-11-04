import React, {FC} from 'react';
import AdminIco from "../../../../assets/icons/AdminIco.svg";
import RemoveIco from "../../../../assets/icons/remove-add.svg";
import OpenEyes from "../../../../assets/icons/openeyes.png";
import {CommentsList} from "../Commets/CommentList";
import './BlogModal.scss'
import {IPost, TypeSetState} from "../../../../types";
import {Like} from "../Like/Like";


interface BlogModalProps {
    visible: boolean,
    setVisible: TypeSetState<boolean>,
    post: IPost,
}

export const BlogModal: FC<BlogModalProps> = ({setVisible, visible, post}) => {

    return (
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
                        <Like post={post} />
                    </div>
                    <div className='post-more-attr__views'>
                        <div className='post-more-attr__views-ico'><img
                            src={OpenEyes}/></div>
                        <div className='post-more-attr__views-number'>{post.views} Просмотров</div>
                    </div>
                </div>
                <hr/>
                <div className='post-more-comment'>
                    <CommentsList currentUserId='6'/>
                </div>
            </div>
        </div>
    );
};
