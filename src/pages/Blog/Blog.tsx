import React, {useState} from "react";
import './Blog.scss'
import {Post} from "./components/Post/Post";
import {posts} from "../../data/Posts";
import {IPost} from "../../types";
import {Best} from "./components/Best/Best";

interface BlogProps {

}

export const Blog = () => {

    const [filtred, setFiltred] = useState(posts)

    const FillArr: { [Themes: string]: number } = {};
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
            <div className='blog'>
                <div className='blog__title'>Блог</div>
                <div className='blog__container'>
                    <div className='blog__posts'>
                        <div className='blog__post'>{filtred.map((post: IPost) => <Post post={post}
                                                                                        key={post.id}/>)}</div>
                    </div>
                    <div className='blog__panel'>
                        <div className='blog__panel-buttons'>
                            <div className='blog__panel-buttons-filter'>Фильтр по тематике</div>
                            <button onClick={() => ArrFilter('all')}>Все</button>
                            <div className='blog__panel-buttons-button'>{fill.map((FillArr) => <button
                                onClick={() => ArrFilter(FillArr.Themes)}>{FillArr.Themes}</button>)}</div>
                        </div>
                        <div className='blog__panel-best'>
                            <div className='blog__panel-best-title'>Популярное</div>
                            <div className='blog__panel-best-post'><Best /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};