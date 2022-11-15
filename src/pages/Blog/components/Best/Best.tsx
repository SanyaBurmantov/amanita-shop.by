import React, {useState} from 'react';
import {IPost} from "../../../../types";
import './Best.scss'
import {BlogModal} from "../BlogModal/BlogModal";


interface OnePostProps {
    post: IPost,
}

export const Best = ({post}: OnePostProps) => {

    const [visible, setVisible] = useState(false)

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
            <BlogModal visible={visible} setVisible={setVisible} post={post} />
        </>
    );
};
