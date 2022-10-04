import React, {useState} from 'react';
import {posts} from '../../../../data/Posts'

interface Props {
}

export const Filter = () => {

    const FillArr: {[Themes: string]: number} = {};
    const fill = posts.filter(({Themes}) => (!FillArr[Themes] && (FillArr[Themes] = 1)));

    return (
        <>{fill.map((FillArr) =><button> {FillArr.Themes}</button>)}</>
    );
};