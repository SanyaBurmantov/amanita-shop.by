import React, {FC} from 'react';
import {posts} from "../../../../data/Posts";
import {FunctionArrFilter} from "../../../../types";

interface FilterProps {
    ArrFilter: FunctionArrFilter
}

export const Filter: FC<FilterProps> = ({ArrFilter}) => {

    const FillArr: { [Themes: string]: number } = {};
    const fill = posts.filter(({Themes}) => (!FillArr[Themes] && (FillArr[Themes] = 1)));


    return (
        <div className='blog__panel-buttons-button'>{fill.map((FillArr) => <button
            key='F'onClick={() => ArrFilter(FillArr.Themes)}>{FillArr.Themes}</button>)}</div>
    );
};
