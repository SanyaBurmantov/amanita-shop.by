import React, {FC, useState} from 'react';
import {posts} from "../../../../data/Posts";



const Filter:FC = () => {
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
        <div className='filter__btn'>
            <button onClick={() => ArrFilter('all')}>Все</button>
            <>{fill.map((FillArr) =><button onClick={() => ArrFilter(FillArr.Themes)}>{FillArr.Themes}</button>)}</>
        </div>
    );
};

export default Filter;