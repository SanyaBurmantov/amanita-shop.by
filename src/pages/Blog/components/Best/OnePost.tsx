import React, {useEffect} from 'react';
import {IPost} from "../../../../types";
import './OnePost.scss'

interface OnePostProps {
    post: IPost
}

export const OnePost = ({post}: OnePostProps) => {


    return (
        <div className='best'>
            <div className='best-container'>
            <div className='best-text'>
                <div className='best-text-title'>{post.title}</div>
                <div className='best-text-data'>{post.PostData}</div>
            </div>
            <div className='best-image'><img src={post.image}/></div>
            </div>
        </div>
    );
};
