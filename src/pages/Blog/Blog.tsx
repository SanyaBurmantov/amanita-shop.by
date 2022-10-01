import React, {useState} from "react";
import './Blog.scss'
import {Post} from "./components/Post/Post";
import {posts} from "../../data/Posts";
import {Filter} from "./components/Filter/Filter";
import {Best} from "./components/Best/Best";

interface Props {
}

export const Blog = (props: Props) => {

    return (
        <div className='background__blog'>
        <div className='container'>
            <div className='blog__title'>Блог</div>
            <div className='blog__content'>
                <div className='content__posts'>{posts.map((post) => <Post post={post} key={post.id}/>)}</div>
                <div className='content__panel'>
                    <div className='panel__filter'>
                        <div className='filter__text'>Фильтр</div>
                        <select>
                            <option value="Govno">Govno</option>
                            <option value="Pizda">Pizda</option>
                            <option value="Zalupa">Zalupa</option>
                            <option selected value="All">Все новости</option>
                        </select>
                    </div>
                    <div className='panel__best'><Best /></div>
                </div>
            </div>
        </div>
</div>
    )
}