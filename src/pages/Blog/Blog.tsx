import React, {useState} from "react";
import './Blog.scss'
import {Post} from "./components/Post/Post";
import {Best} from "./components/Best/Best";

import {posts} from "../../data/Posts";
import {IPost} from "../../models";
import Filter from "./components/Filter/Filter";

interface BlogProps {


}

export const Blog = () => {

    const [filtred, setFiltred] = useState(posts)

    const FillArr: {[Themes: string]: number} = {};
    const fill = posts.filter(({Themes}) => (!FillArr[Themes] && (FillArr[Themes] = 1)));


    function ArrFilter(Themes: string) {
        if (Themes === 'all') {
            setFiltred(posts)
        } else {
            let newArr = [...posts].filter(post => post.Themes === Themes)
            setFiltred(newArr)
        }
    }
    return (
        <div className='background__blog'>
            <div className='container'>
                <div className='blog__title'>Блог</div>
                <div className='blog__content'>
                    <div className='content__posts'>{filtred.map((post: IPost) => <Post post={post} key={post.id}/>)}</div>
                    <div className='content__panel'>
                        <div className='filter__btn'>
                            <button onClick={() => ArrFilter('all')}>Все</button>
                            <>{fill.map((FillArr) =><button onClick={() => ArrFilter(FillArr.Themes)}>{FillArr.Themes}</button>)}</>
                        </div>
                        <div className='panel__best'><Best/></div>
                    </div>
                </div>
            </div>
        </div>
    );

};