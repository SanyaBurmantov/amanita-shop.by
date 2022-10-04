import React, {useState} from "react";
import './Blog.scss'
import {Post} from "./components/Post/Post";
import {Best} from "./components/Best/Best";
import {posts} from "../../data/Posts";
import {Filter} from "./components/Filter/Filter";

interface Props {

}

export const Blog = () => {

    const [filtred, setFiltred] = useState(posts)

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
                    <div className='content__posts'>{filtred.map((post) => <Post post={post} key={post.id}/>)}</div>
                    <div className='content__panel'>
                        <div className='panel__filter'>
                            <div className='filter__text'>Отфильтрованные кнопки тематики из json посты не фильтруются</div>
                            <Filter />
                            <div className='filter__texts'>Написанные тематики от балды но по ним посты фильтруются</div>
                            <div className='filter__btn'>
                                <button onClick={() => ArrFilter('all')}>Все</button>
                                <button onClick={() => ArrFilter('Zalupa')}>Категория 1</button>
                                <button onClick={() => ArrFilter('Jopa')}>Категория 2</button>
                                <button onClick={() => ArrFilter('Govno')}>Категория 3</button>
                                <button onClick={() => ArrFilter('Pizda')}>Категория 4</button>
                                <button onClick={() => ArrFilter('Hyi')}>Категория 5</button>
                            </div>
                        </div>
                        <div className='panel__best'><Best/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};