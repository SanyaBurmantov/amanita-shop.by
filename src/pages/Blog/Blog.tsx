import React, {FC, useState} from "react";
import './Blog.scss'
import {posts} from "../../data/Posts";
import {IPost} from "../../types";
import {Post} from "./components/Post/Post";
import {Filter} from "./components/Filter/Filter";
import {Best} from "./components/Best/Best";
import {motion} from "framer-motion";

interface BlogProps {
}

export const Blog: FC <BlogProps> = () => {

    const [filtred, setFiltred] = useState(posts)

    function ArrFilter(Themes: string) {
        if (Themes === 'all') {
            setFiltred(posts)
        } else {
            let newArr = [...posts].filter(post => post.Themes === Themes)
            setFiltred(newArr)
        }
    }

    const counts = 4;
    const maxNumbers = posts.slice().sort(function (a, b) {
        if (a.likeCount < b.likeCount) {
            return 1;
        }
        if (a.likeCount > b.likeCount) {
            return -1;
        }
        return 0;
    }).slice(0, counts);




    return (
        <motion.div className='background__blog'
                    initial={{width: "30%"}}
                    animate={{width: "100%"}}
                    exit={{x: -window.innerWidth, transition: {duration: 0.3}}}>
<div className="container">
            <div className='blog'>
                <div className='blog__title'>Блог </div>
                <div className='blog__container'>
                    <div className='blog__posts'>
                        <div className='blog__post'>{filtred.map((post: IPost) => <Post
                            post={post}
                            key={post.id}
                        />)}</div>
                    </div>
                    <div className='blog__panel'>
                        <div className='blog__panel-buttons'>
                            <div className='blog__panel-buttons-filter'>Фильтр по тематике</div>
                            <button onClick={() => ArrFilter('all')}>Все</button>
                            <Filter ArrFilter={ArrFilter}/>
                        </div>
                        <div className='blog__panel-best'>
                            <div className='blog__panel-best-title'>Популярное</div>
                            <div className='blog__panel-best-post'>
                                <div className='blog__best'>
                                    {maxNumbers.map((post: IPost) => <Best
                                        post={post}
                                        key={post.id}
                                    />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
        </motion.div>
    );
};