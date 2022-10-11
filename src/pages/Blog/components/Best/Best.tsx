import React from 'react';
import {posts} from "../../../../data/Posts";
import {IPost} from "../../../../types";
import {OnePost} from "./OnePost";

interface BestProps {
}

export const Best = () => {

    const count = 4;
    const maxThreeNumbers = posts.slice().sort(function (a, b) {
        if (a.likeCount < b.likeCount) {
            return 1;
        }
        if (a.likeCount > b.likeCount) {
            return -1;
        }
        return 0;
    }).slice(0, count);


    return (
        <div className='blog__best'>
            {maxThreeNumbers.map((post:IPost) => <OnePost post={post} key={post.id} />)}
        </div>
    );
};
