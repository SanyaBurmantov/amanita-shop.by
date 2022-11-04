import React, {FC} from 'react';
import OpenEyes from "../../../../assets/icons/openeyes.png";
import CloseEyes from "../../../../assets/icons/closeeyes.png";
import {IPost} from "../../../../types";

interface ViewesProps {
    post: IPost,
}

export const Viewes: FC<ViewesProps> = ({post}) => {
    return (
        <>
            <div className='post__container-attr-views-ico'><img
                src={post.ViewedByUser ? OpenEyes : CloseEyes}/></div>
            <div className='post__container-attr-views-number'>{post.views}</div>
        </>
    );
};
